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

favorite_movie = db.Table(
    'favorite_movie',
    db.Column('user_id', db.Integer, db.ForeignKey(
        'user.id'),  primary_key=True),
    db.Column('movie_id', db.Integer, db.ForeignKey(
        'movies.id'), primary_key=True)
)

service_user = db.Table(
    'services_users',
    db.Column('user_id', db.Integer, db.ForeignKey(
        'user.id'), primary_key=True),
    db.Column('services_id', db.Integer, db.ForeignKey(
        'service.id'), primary_key=True),
)

class ChallengesUser(db.Model):
    _tablename_ = 'challengesuser'
    id = db.Column(db.Integer, primary_key=True)
    users_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    challenges_id = db.Column(db.Integer, db.ForeignKey("challenges.id"), nullable=False)
    current_day = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)
    finished = db.Column(db.Boolean, nullable=True)


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(120), nullable=False)
    birthdate = db.Column(db.Integer, nullable=False)
    role_id = db.Column(db.Integer, nullable=False)
    books = db.relationship(
        'Book', secondary='favorite_book', back_populates="users")
    podcasts = db.relationship('Podcast', secondary='favorite_podcast')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.first_name,
            "email": self.email,
            "address": self.address,
            "birthdate": self.birthdate,
        }

    def new_user(self):
        db.session.add(self)
        db.session.commit()


class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    properties = db.Column(db.Text, nullable=False)
    users = db.relationship(
        'User', secondary='favorite_book', back_populates="books")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "properties": self.properties
        }


class Podcast(db.Model):
    __tablename__ = 'podcasts'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    properties = db.Column(db.Text, nullable=False)
    users = db.relationship(
        'User', secondary='favorite_podcast', back_populates="podcasts")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "properties": self.properties
        }


class Movie(db.Model):
    __tablename__ = 'movies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    properties = db.Column(db.Text, nullable=False)
    users = db.relationship('User', secondary='favorite_movie')

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "properties": self.properties
        }


class Role(db.Model):
    _tablename_ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }


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


class Thanks(db.Model):
    _tablename_ = 'thanks'
    id = db.Column(db.Integer, primary_key=True)
    list = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "list": self.list,
            "date": self.date,
        }


class Challenges(db.Model):
    _tablename_ = 'challenges'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    length_in_days = db.Column(db.Integer, nullable=False)
    text = db.Column(db.Text, nullable=False)
    audio = db.Column(db.String, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "length_in_days": self.length_in_days,
            "text": self.text,
            "audio": self.audio
        }



