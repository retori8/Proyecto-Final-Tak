"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os # me permite leer del env.
from flask import Flask, request, jsonify, url_for, send_from_directory,  Blueprint
from flask_migrate import Migrate# genera de manera dinamica mis tablas desde models
from flask_swagger import swagger
from flask_cors import CORS # evita errores de seguridad en la api
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
from api.utils import APIException, generate_sitemap
from api.models import db # me permite vincular mi api con mis modpipeelos
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from api.models import db, User, Book, Podcast, Movie, Challenges, Service, Thanks, ChallengesUser, Role, Storage
from dotenv import load_dotenv
from datetime import datetime
import cloudinary
from cloudinary.uploader import upload


#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

load_dotenv()
app.config["DEBUG"] = True
app.config["ENV"] = "development"
# database condiguration
db_url = os.getenv("DATABASE_URL") #es para diferenciar modo produccion y desarrollo?
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config["JWT_SECRET_KEY"] = "tak-secret"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

jwt = JWTManager(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


#LOGIN---------------------------------------------------------------------------------------------------------------------

@app.route('/api/login', methods=['POST'])
def login():

    email = request.json.get('email')
    password = request.json.get('password')
    

    if not email:
        return jsonify({ "msg": "Tu email es necesario"}), 422

    if not password:
        return jsonify({ "msg": "Tu password es necesario"}), 422

    user_filter = User.query.filter_by(email=email).first()

    if not user_filter:
        return jsonify({ "msg": "Email/Contraseña son incorrectos"}), 401

    if not check_password_hash(user_filter.password, password):
        return jsonify({ "msg": "Username/Password are incorrects"}), 401
    

    access_token = create_access_token(identity=user_filter.id)

    data = {
        "access_token": access_token,
        "user": user_filter.serialize()
    }

    return jsonify(data), 200

#TOKEN/PROTECTED---------------------------------------------------------------------------------------------------------------------


@app.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "username": user.username }), 200



#REGISTRO---------------------------------------------------------------------------------------------------------------------

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    user = User()
    user.first_name = data["first_name"]
    user.last_name = data["last_name"]
    user.email = data["email"]
    user.password = generate_password_hash(data["password"])
    # user.address = data["address"] if not data["address"] else ""
    # user.birthdate = data["birthdate"] if data["birthdate"] else None
    # user.image = data["image"] if data["image"] else None
    user.role_id = 2

    '''if len(role) > 0:
        for roles_id in role:
            role = Role.query.get(roles_id)
            user.roles.append(role)'''

    '''# Datos de la tabla "users"
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    email = request.json.get('email')
    password = request.json.get('password')

    # Datos de la tabla roles
    roles = request.json.get('roles')'''

    if not user.first_name:
        return jsonify({ "msg": "Necesitamos tu nombre"}), 422
    
    if not user.last_name:
        return jsonify({ "msg": "Necesitamos tu apellido"}), 422
    
    if not user.email:
        return jsonify({ "msg": "Necesitamos tu email"}), 422

    if not user.password:
        return jsonify({ "msg": "Necesitamos que ingreses una contraseña"}), 422

    user_filter = User.query.filter_by(email=user.email).first()

    if user_filter:
        return jsonify({ "msg": "El usuario ya existe"}), 400

    user.new_user()
    
    return jsonify({"msg":"register created", "user": user.serialize()}), 201

    # access_token = create_access_token(identity=user.id)

    # datos = {
    #     "access_token": access_token,
    #     "user": user.serialize()
    # }

    # return jsonify(datos), 200

#thanks--------------------------------------------------------------------------------------------------------------------------

'''@app.route('/api/thanks', methods=['POST'])
@jwt_required()
def add_thank():
    data = request.get_json()

    thank = Thanks()
    thank.list = data["list"]
    thank.date = datetime.now()
    thank.users_id = data["users_id"]
    thank.new_thanks()   
    
    return jsonify({"msg":"thank created", "thank": thank.serialize()}), 201 
'''
@app.route('/api/thanks', methods=['GET'])
# @jwt_required()
def get_all_thanks():
    thanks = Thanks.query.all()
    thanks = list(map(lambda thank : thank.serialize(), thanks))

    return jsonify(thanks), 200 
@app.route('/api/thanks/<int:id>', methods=['DELETE'])
# @jwt_required()
def delete_thank(id):
    thank = Thanks.query.get(id)
    thank.delete_thanks()

    return jsonify({"msg":"thank delete", "thank": {}}), 200

'''@app.route('/api/thanks/<int:id>', methods=['GET'])
def get_all_thanks_by_user(id):
    thanks = Thanks.query.filter_by(users_id=id)
    thanks = list(map(lambda thank : thank.serialize(), thanks))

    return jsonify(thanks), 200

@app.route('/api/thanks/<int:id>', methods=['GET'])
def get_thanks_by_user(id = None):
    print(datetime.now())
    current_user = get_jwt_identity()

    thanks = Thanks.query.filter_by(users_id=id)
    thanks = list(map(lambda thank : thank.serialize(), thanks))

    return jsonify(thanks), 200'''

@app.route('/thanks', methods=['GET', 'POST'])
@app.route('/thanks/<int:id>', methods=['GET', 'DELETE'])
@jwt_required()
def thanks(id = None):
    current_user = get_jwt_identity()
    print(current_user)

    if request.method == 'GET':
        if id is not None:
            thanks = Thanks.query.filter_by(users_id=current_user).first()
            if not thanks:
                return jsonify({ "msg": "No encontrado"}), 404

            return jsonify(thanks.serialize()), 200
            
        else:
            thanks = Thanks.query.filter_by(users_id=current_user)
            thanks = list(map(lambda thank : thank.serialize(), thanks))

            return jsonify(thanks), 200


    if request.method == 'POST':
        data = request.get_json()

        thank = Thanks()
        thank.list = data["list"]
        thank.date = datetime.now()
        thank.users_id = current_user
        thank.new_thanks()   
    
    return jsonify({"msg":"thank created", "thank": thank.serialize()}), 201 

#user---------------------------------------------------------------------------------------------------------------------
@app.route('/api/users', methods=['POST'])
@jwt_required()
def add_user():
    data = request.get_json()

    user = User()
    user.first_name = data["first_name"]
    user.last_name = data["last_name"]
    user.email = data["email"]
    user.password = generate_password_hash(data["password"])
    user.address = data["address"] if data["address"] else None
    user.birthdate = data["birthdate"] if data["birthdate"] else None
    user.image = data["image"] if data["image"] else None
    user.role_id = data["role_id"] if data["image"] else user.role_id
    user.new_user()  
    
    return jsonify({"msg":"user created", "user": user.serialize()}), 201

@app.route('/api/users', methods=['GET'])
def get_all_users():#trae todos los registros que tengo en mi base de datos
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))#por cada usuario que encuentre llame a serialize que me permite convertirlo en un objeto serializado para ser reconocido por python

    return jsonify(users), 200 

@app.route('/api/users/search', methods=['GET'])#search?q=janedoe@gmail.com
@jwt_required()
def search_user():
    q = request.args.get(q)#como lo hago si tengo mas parametros?

    users = User.query.filter_by(email=q)#busqueda por email
    users = list(map(lambda user: user.serialize(), users))#traemelo como diccionario

    return jsonify(users), 200 

@app.route('/api/users/<int:id>', methods=['PUT'])
# @jwt_required()
def update_user(id):
    data = request.get_json()

    user = User.query.get(id)#traeme todos los datos de ese usuario particular
    user.first_name = data["first_name"] if data["first_name"] else user.first_name #si me entrega un nuevo dato lo actualizo, sino dejo el dato que tenia inicialmente
    user.last_name = data["last_name"] if data["last_name"] else user.last_name
    user.email = data["email"] if data["email"] else user.email
    user.address = data["address"] if not data["address"] else user.address
    user.birthdate = data["birthdate"] if data["birthdate"] else user.birthdate
    user.image = data["image"] if data["image"] else user.image
    user.role_id = data["role_id"] if data["role_id"] else user.role_id
    user.update_user()#actualiza  

    return jsonify({"msg":"user update", "user": user.serialize()}), 200

@app.route('/api/users/<int:id>', methods=['DELETE'])
# @jwt_required()
def delete_user(id):
    user = User.query.get(id)
    user.delete_user()

    return jsonify({"msg":"user delete", "user": {}}), 200
    
#books----------------------------------------------------------------------------------------------------------------
@app.route('/api/books', methods=['POST'])
def add_book():
    data = request.get_json()

    book = Book()
    book.name = data["name"]
    book.author = data["author"]
    book.number_of_pages = data["number_of_pages"]
    book.properties = data["properties"]
    book.new_book()  
    
    return jsonify({"msg":"book created", "book": book.serialize()}), 201

@app.route('/api/books', methods=['GET'])
def get_all_books():
    books = Book.query.all()
    books = list(map(lambda book: book.serialize(), books))

    return jsonify(books), 200 

@app.route('/api/books/<int:id>', methods=['PUT'])
def update_book(id):
    data = request.get_json()

    book = Book.query.get(id)
    book.id = data["id"]
    book.name = data["name"] if data["name"] else book.name
    book.author = data["author"] if data["author"] else book.author
    book.number_of_pages = data["number_of_pages"] if data["number_of_pages"] else book.number_of_pages
    book.properties = data["properties"] if data["properties"] else book.properties
    book.update_book() 

    return jsonify({"msg":"book update", "book": book.serialize()}), 200

@app.route('/api/books/<int:id>', methods=['DELETE'])
def delete_books(id):
    book = Book.query.get(id)
    book.delete_book()

    return jsonify({"msg":"book delete", "book": {}}), 200

#favoritebooks----------------------------------------------------------------------------------------------------------------

@app.route('/api/favoritebooks', methods=['GET'])#almacenar user/books
def add_favoritebooks():

    favoritebooks = User.query.get(11)#el libro favorito del usuario(id)
    book = Book.query.get(6)#es el libro(id)
    favoritebooks.books.append(book)#guardar libro
    favoritebooks.new_user()#guardar usuario
    #print(favoritebooks)
    
    return jsonify({"msg":"favoritebooks created", "favoritebooks": "favoritebooks.serialize()"}), 201

#podcasts--------------------------------------------------------------------------------------------------------

@app.route('/api/podcats', methods=['POST'])
def add_podcast():
    data = request.get_json()

    podcast = Podcast()
    podcast.name = data["name"]
    podcast.podcaster = data["podcaster"]
    podcast.featured_episodes = data["featured_episodes"]
    podcast.properties = data["properties"]
    podcast.new_podcast()  
    
    return jsonify({"msg":"podcast created", "podcast": podcast.serialize()}), 201

@app.route('/api/podcasts', methods=['GET'])
def get_all_podcasts():
    podcasts = Podcast.query.all()
    podcasts = list(map(lambda podcast: podcast.serialize(), podcasts))

    return jsonify(podcasts), 200 

@app.route('/api/podcasts/<int:id>', methods=['PUT'])#no puedo por id, se puede repetir
def update_podcast(id):
    data = request.get_json()

    podcast = Podcast.query.get(id)
    podcast.name = data["name"] if data["name"] else podcast.name
    podcast.podcaster = data["podcaster"] if data["podcaster"] else podcast.podcaster
    podcast.featured_episodes = data["featured_episodes"] if data["featured_episodes"] else podcast.featured_episodes
    podcast.properties = data["properties"] if data["properties"] else podcast.properties
    podcast.update_podcast() 

    return jsonify({"msg":"podcast update", "podcast": podcast.serialize()}), 200

@app.route('/api/podcasts/<int:id>', methods=['DELETE'])
def delete_podcast(id):
    podcast = Podcast.query.get(id)
    podcast.delete_podcast()

    return jsonify({"msg":"podcast delete", "podcast": {}}), 200

#favorite_podcasts--------------------------------------------------------------------------------------------------------

@app.route('/api/favoritepodcasts', methods=['GET'])
def add_favoritepodcasts():

    favoritepodcasts = User.query.get(12)
    podcast = Podcast.query.get(4)
    favoritepodcasts.podcasts.append(podcast)
    favoritepodcasts.new_user()

    return jsonify({"msg":"new favotite_podcast"}), 201

#movies------------------------------------------------------------------------------------------------------

@app.route('/api/movies', methods=['POST'])
def add_movie():
    data = request.get_json()

    movie = Movie()
    movie.name = data["name"]
    movie.director  = data["director"]
    movie.duration = data["duration"]
    movie.properties = data["properties"]
    movie.new_movie()  
    
    return jsonify({"msg":"movie created"," movie": movie.serialize()}), 201

@app.route('/api/movies', methods=['GET'])
def get_all_movies():
    movies = Movie.query.all()
    movies = list(map(lambda movie: movie.serialize(), movies))

    return jsonify(movies), 200 

@app.route('/api/movies/<int:id>', methods=['PUT'])#no puedo por id, se puede repetir
def update_movies(id):
    data = request.get_json()

    movie = Movie.query.get(id)
    movie.name = data["name"] if data["name"] else movie.name
    movie.director = data["director"] if data["director"] else movie.director
    movie.duration = data["duration"] if data["duration"] else movie.duration
    movie.properties = data["properties"] if data["properties"] else movie.properties
    movie.update_movie() 

    return jsonify({"msg":"movie update", "movie": movie.serialize()}), 200

@app.route('/api/movies/<int:id>', methods=['DELETE'])
def delete_movies(id):
    movie = Movie.query.get(id)
    movie.delete_movie()

    return jsonify({"msg":"movie delete", "movie": {}}), 200

#favoritemovies------------------------------------------------------------------------------------------------------

@app.route('/api/favoritemovies', methods=['GET'])
def add_favoritemovies():

    user = User.query.get(11)
    movie = Movie.query.get(9)
    user.movies.append(movie)
    user.update_user()

    return jsonify({"msg":"new favotite_movie"}), 201


# challenges -----------------------------------------------------------------------------------------------

@app.route('/api/challenges', methods=['POST'])
def add_challenge():
    data = request.get_json()

    challenge = Challenges()
    challenge.name = data["name"]
    challenge.length_in_days = data["length_in_days"]
    challenge.text = data["text"]
    challenge.audio = data["audio"] if data["audio"] else None
    challenge.new_challenges()  
    
    return jsonify({"msg":"challenge created", "challenge": challenge.serialize()}), 201

@app.route('/api/challenges', methods=['GET'])
def get_all_challenges():
    challenges = Challenges.query.all()
    challenges = list(map(lambda challenge : challenge.serialize(), challenges))

    return jsonify(challenges), 200 


@app.route('/api/challenges/<int:id>', methods=['PUT'])#no puedo por id, se puede repetir
def update_challenges(id):
    data = request.get_json()

    challenge = Challenges.query.get(id)
    challenge.name = data["name"] if data["name"] else challenge.name
    challenge.length_in_days = data["length_in_days"] if data["length_in_days"] else challenge.length_in_days
    challenge.text = data["text"] if data["text"] else challenge.text
    challenge.audio = data["audio"] if data["audio"] else challenge.audio
    challenge.update_challenges() 

    return jsonify({"msg":"challenge update", "challenge": challenge.serialize()}), 200

@app.route('/api/challenges/<int:id>', methods=['GET'])
def challenges_by_type(id):
    challenge = Challenges.query.get(id)

    return jsonify({"msg":"challenge by id", "challenge": challenge.serialize()}), 200

@app.route('/api/challenges/<int:id>', methods=['DELETE'])
def delete_challenges(id):
    challenge = Challenges.query.get(id)
    challenge.delete_challenges()

    return jsonify({"msg":"challenge delete", "challenge": {}}), 200

#challengesuser------------------------------------------------------------------------------------------------------------------
@app.route('/api/challengesusers', methods=['POST'])
def add_challengesuser():
    data = request.get_json()

    challengesuser = ChallengesUser()
    challengesuser.users_id = data["users_id"]
    challengesuser.challenges_id = data["challenges_id"]
    challengesuser.current_day = data["current_day"]
    challengesuser.date = data["date"]
    challengesuser.finished = data["finished"]
    challengesuser.new_challengesuser()  
    
    return jsonify({"msg":"challengesuser created", "challengesuser": challengesuser.serialize()}), 201

@app.route('/api/challengesusers', methods=['GET'])#para grafico
def get_all_challengesuser():
    challengesusers = ChallengesUser.query.all()
    challengesusers = list(map(lambda challengesuser : challengesuser.serialize(), challengesusers))

    return jsonify(challengesusers), 200 

@app.route('/api/challengesusers/<int:id>', methods=['GET'])
def get_all_challengesusers_by_user(id):
    challengesusers = ChallengesUser.query.filter_by(users_id=id)
    challengesusers = list(map(lambda challengesuser : challengesuser.serialize(), challengesusers))

    return jsonify(challengesusers), 200

@app.route('/api/challengesusers/<int:id>', methods=['DELETE'])
def delete_challengesuser(id):
    challengesusers = ChallengesUser.query.get(id)
    challengesusers.delete_challengesuser()

    return jsonify({"msg":"challengesuser delete", "challengesuser": {}}), 200




#roles------------------------------------------------------------------------------------------------------------------------
@app.route('/api/roles', methods=['POST'])
def add_role():
    data = request.get_json()

    role = Role()
    role.name = data["name"]
    role.user = data["user"]
    role.new_role()  
    
    return jsonify({"msg":"role created", "role": role.serialize()}), 201

#services------------------------------------------------------------------------------------------------------------------

@app.route('/api/services', methods=['POST'])
def add_service():
    data = request.get_json()

    service = Service()
    service.name = data["name"]
    service.text  = data["text"]
    service.new_service()  
    
    return jsonify({"msg":"service created","service": service.serialize()}), 201

@app.route('/api/services', methods=['GET'])
def get_all_services():
    service = Service.query.all()
    service = list(map(lambda service: service.serialize(), service))

    return jsonify(service), 200 

@app.route('/api/services/<int:id>', methods=['PUT'])
def add_services(id):
    data = request.get_json()

    service = Service.query.get(id)
    service.name = data["name"] if data["name"] else service.name
    service.text = data["text"] if data["text"] else service.text
    service.update_service() 

    return jsonify({"msg":"service update", "service": service.serialize()}), 200

@app.route('/api/services/<int:id>', methods=['DELETE'])
def delete_service(id):
    service = Service.query.get(id)
    service.delete_service()

    return jsonify({"msg":"service delete", "service": {}}), 200

#services/user------------------------------------------------------------------------------------------------------------------

@app.route('/api/servicesusers', methods=['GET'])
def add_servicesusers():

    servicesusers = User.query.get(10)
    service = Service.query.get(1)
    servicesusers.services.append(service)
    servicesusers.new_user()

    return jsonify({"msg":"new service_user"}), 201

#unload-------------------------------------------------------------------------------------------------------------------------

@app.route('/api/upload', methods=['POST'])
def upload_archivo():
    
    title = request.form['title']
    type_upload = request.form['type_upload']

    if not title:
        return jsonify({ "msg": "El titulo es requerido"}), 400    

    if not 'archivo' in request.files:
        return jsonify({ "msg": "La imagen es requerida"}), 400    
    
    archivo = request.files['archivo']
    public_id = archivo.filename
    resp = upload(archivo, resource_type = type_upload, folder="storege", public_id=public_id)

    if not resp:
        return jsonify({ "msg": "Error al subir archivo"}), 400

    storage = Storage()
    storage.title = title
    storage.archivo= resp['secure_url']
    storage.public_id = public_id
    storage.type_upload =type_upload

    storage.new_archivo()

    return jsonify(storage.serialize()), 201

@app.route('/upload/<int:id>', methods=['PUT'])
def update_upload_archivo(id):
    storage = Storage.query.get(id)

    if not storage:
        return jsonify({ "msg": "Storage no encontrada."}), 404

    title = request.form['title']

    if not title:
        return jsonify({ "msg": "El titulo es requerido"}), 400    

    if not 'archivo' in request.files:
        return jsonify({ "msg": "La archivo es requerida"}), 400    
    
    archivo = request.files['archivo']
    resp = upload(archivo, folder="storage", public_id=storage.public_id)

    if not resp:
        return jsonify({ "msg": "Error al subir imagen"}), 400

    storage.title = title
    storage.archivo = resp['secure_url']
    storage.update()

    return jsonify(storage.serialize()), 200


@app.route('/uploads', methods=['GET'])
def list_uploads():

    storages = Storage.query.all()
    storages = list(map(lambda storage: storage.serialize(), storages))
    

    return jsonify(storages), 200

#storage------------------------------------------------------------------------------------------------------------------------


#------------------------------------------------------------------------------------------------------------------------
# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response



cloudinary.config(
  cloud_name = os.getenv('CLOUDINARY_CLOUD_NAME'),
  api_key = os.getenv('CLOUDINARY_CLOUD_API_KEY'),
  api_secret = os.getenv('CLOUDINARY_CLOUD_API_SECRET'),
  secure = True
)

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
