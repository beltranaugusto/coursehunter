from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum, ForeignKey
import enum
db = SQLAlchemy()




class Publishertype(enum.Enum):
    university = "Universidad/Instituto"
    academy = "Academia"
    company = "Compania"
    independent = "Independiente"
    other = "Otro"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique = True, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    publisherMode = db.Column(db.Boolean(), unique=False, nullable=False)
    publisherType = db.Column("publishertype",Enum(Publishertype), unique=False, nullable=False)
    post = db.relationship("Post", backref= "user", lazy= True) 



    def __repr__(self):
        return f'<User {self.email} {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Post(db.Model):
    __tablename__ ="post"
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, ForeignKey("user.id"), nullable=False)
    name = db.Column(db.String(200), unique=False, nullable=False)
    detail = db.Column(db.String(3000), unique=False, nullable=False)
    properties = db.Column(db.Integer, ForeignKey("properties.id"), nullable=False)
    categories = db.Column(db.Integer, ForeignKey("categories.id"), nullable=False)
    event= db.Column(db.Boolean(), unique=False, nullable=False)
    def serialize(self):
        return{
            "author": self.user_id,
            "name": self.name,
            "detail":self.detail,
            "properties": self.properties,
            "categories":self.categories 
            }

class Categories(db.Model):
    __tablename__ ="categories"
    id = db.Column(db.Integer, primary_key=True)
    post = db.relationship("Post", backref="categories_post", lazy=True)
    name = db.Column(db.String(200), unique = False, nullable =False)

    def serialize(self):
        return{
            "post": self.post,
            "name": self.name

        }
    
    def __repr__(self):
        return f'<Categories {self.name} >'

class Properties(db.Model):
    __tablename__ ="properties"
    id = db.Column(db.Integer, primary_key=True)
    
    date = db.Column(db.String(120), unique=False, nullable=False)
    duration= db.Column(db.String(200), unique=False, nullable=False)
    certificate= db.Column(db.Boolean(), unique=False, nullable=False)
    post = db.relationship("Post", backref="properties_post", lazy=True)
    
    def serialize(self):
        return{
            "post": self.post,
            "date": self.date,
            "duration": self.duration,
            "certificate": self.certificate
        }

