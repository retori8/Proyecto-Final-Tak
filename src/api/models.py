from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

favorite_book = db.Table(
    'favorite_book',
    db.Column('user_id', db.Integer, db.ForeignKey(
        'user.id'), primary_key=True),
    db.Column('book_id', db.Integer, db.ForeignKey(
        'books.id'), primary_key=True)
)

favorite_podcast = db.Table(
    'favorite_podcast',
    db.Column('user_id', db.Integer, db.ForeignKey(
        'user.id'), primary_key=True),
    db.Column('podcast_id', db.Integer, db.ForeignKey(
        'podcasts.id'),  primary_key=True)
)

favorite_movies = db.Table(
    'favorite_movie',
    db.Column('user_id', db.Integer, db.ForeignKey(
        'user.id'),  primary_key=True),
    db.Column('movie_id', db.Integer, db.ForeignKey(
        'movies.id'), primary_key=True)
)

service_user = db.Table(
    'service_user',
    db.Column('user_id', db.Integer, db.ForeignKey(
        'user.id'), primary_key=True),
    db.Column('services_id', db.Integer, db.ForeignKey(
        'service.id'), primary_key=True),
)


class ChallengesUser(db.Model):
    _tablename_ = 'challengesuser'
    id = db.Column(db.Integer, primary_key=True)
    users_id = db.Column(db.Integer, db.ForeignKey("user.id"))# user.id nombre de la tabla y campo al que hago referencia
    challenges_id = db.Column(db.Integer, db.ForeignKey("challenges.id"))
    current_day = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)
    finished = db.Column(db.Boolean, nullable=True)
    challenges = db.relationship("Challenges", back_populates="challengesUser")
    users = db.relationship("User", back_populates="challengesUser")
    

    def serialize(self):
        return {
            "id": self.id,
            "users_id":self.users_id,
            "challenges_id":self.challenges_id,
            "current_day": self.current_day,
            "date": self.date,
            "finished": self.finished,
        }
    
    def new_challengesuser(self):
        db.session.add(self)
        db.session.commit()


    def delete_challengesuser(self):
        db.session.delete(self)
        db.session.commit()


class User(db.Model):# voy a crear un modelo con esa clase
    __tablename__ = 'user'# y el nombre de la tabla va a ser este / deberia estar en plural
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(120), nullable=True)#--------------- default ="" / no es obligarotio
    birthdate = db.Column(db.Integer, nullable=True)
    image = db.Column(db.String(255), nullable=True)
    role_id = db.Column(db.Integer, db.ForeignKey("role.id"), default=2)
    thanks = db.relationship('Thanks', back_populates="user")
    books = db.relationship('Book', secondary='favorite_book', backref="users")
    podcasts = db.relationship('Podcast', secondary='favorite_podcast', backref="users")
    movies = db.relationship('Movie', secondary='favorite_movie', backref="users")
    services = db.relationship('Service', secondary='service_user', backref="users")
    challengesUser = db.relationship('ChallengesUser', back_populates="users")


    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.first_name,
            "email": self.email,
            "address": self.address,
            "birthdate": self.birthdate,
            "image": self.image,
            #"role_id": self.role_id.serialize(),
        }
    
    def new_user(self):
        db.session.add(self)
        db.session.commit()

    def update_user(self):
        db.session.commit()

    def delete_user(self):
        db.session.delete(self)
        db.session.commit()
        
    

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    author = db.Column(db.String(120), nullable=False)
    number_of_pages = db.Column(db.Integer, nullable=False)
    properties = db.Column(db.Text, nullable=False)
    

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "author": self.author,
            "number_of_pages": self.number_of_pages,
            "properties": self.properties,
        }
    
    def new_book(self):
        db.session.add(self)
        db.session.commit()

    def update_book(self):
        db.session.commit()

    def delete_book(self):
        db.session.delete(self)
        db.session.commit()    


class Podcast(db.Model):
    __tablename__ = 'podcasts'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    podcaster = db.Column(db.String(120), nullable=False)
    featured_episodes = db.Column(db.Integer, nullable=False)
    properties = db.Column(db.Text, nullable=False)
    

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "podcaster": self.podcaster,
            "featured_episodes": self.featured_episodes,
            "properties": self.properties
        }

    def new_podcast(self):
        db.session.add(self)
        db.session.commit()

    def update_podcast(self):
        db.session.commit()

    def delete_podcast(self):
        db.session.delete(self)
        db.session.commit()  

class Movie(db.Model):
    __tablename__ = 'movies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    director = db.Column(db.String(120), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    properties = db.Column(db.Text, nullable=False)
   

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "director": self.director,
            "duration": self.duration,
            "properties": self.properties
        }

    def new_movie(self):
        db.session.add(self)
        db.session.commit()

    def update_movie(self):
        db.session.commit()

    def delete_movie(self):
        db.session.delete(self)
        db.session.commit() 


class Role(db.Model):
    _tablename_ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    users = db.relationship('User', backref = "role")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
    
    def new_role(self):
        db.session.add(self)
        db.session.commit()

    def update_role(self):
        db.session.commit()

    def delete_role(self):
        db.session.delete(self)
        db.session.commit()


class Service(db.Model):
    _tablename_ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    text = db.Column(db.Text, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "text": self.text
        }

    def new_service(self):
        db.session.add(self)
        db.session.commit()

    def update_service(self):
        db.session.commit()

    def delete_service(self):
        db.session.delete(self)
        db.session.commit() 


class Thanks(db.Model):
    _tablename_ = 'thanks'
    id = db.Column(db.Integer, primary_key=True)
    list = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User", back_populates="thanks")

    def serialize(self):
        return {
            "id": self.id,
            "list": self.list,
            "date": self.date, 
            "users_id":self.users_id,
        }
    
    def new_thanks(self):
        db.session.add(self)
        db.session.commit()

    def delete_thanks(self):
        db.session.delete(self)
        db.session.commit()    


class Challenges(db.Model):
    _tablename_ = 'challenges'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    length_in_days = db.Column(db.Integer, nullable=False)
    text = db.Column(db.Text, nullable=False)
    audio = db.Column(db.String, nullable=True)
    challengesUser = db.relationship('ChallengesUser', back_populates="challenges")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "length_in_days": self.length_in_days,
            "text": self.text,
            "audio": self.audio
        }
    
    def new_challenges(self):
        db.session.add(self)
        db.session.commit()

    def update_challenges(self):
        db.session.commit()

    def delete_challenges(self):
        db.session.delete(self)
        db.session.commit()



