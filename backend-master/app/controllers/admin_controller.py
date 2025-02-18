from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///admin.db'  # Use SQLite for simplicity
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

@app.route('/api/v1/register_admin', methods=['POST'])
def register_admin():
    data = request.get_json()
    username = data['username']
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_admin = Admin(username=username, password=password)
    db.session.add(new_admin)
    db.session.commit()
    return jsonify({"message": "Admin created successfully!"}), 201

@app.route('/api/v1/admin_login', methods=['POST'])
def admin_login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    admin = Admin.query.filter_by(username=username).first()
    if admin and bcrypt.check_password_hash(admin.password, password):
        token = create_access_token(identity={"id": admin.id, "username": admin.username})
        return jsonify(access_token=token, admin={"id": admin.id, "username": admin.username}), 200
    return jsonify({"message": "Invalid credentials!"}), 401

@app.route('/api/v1/products', methods=['GET'])
@jwt_required()
def get_products():
    # Replace this with your product retrieval logic
    products = [{'id': 1, 'name': 'Product 1', 'price': 10}, {'id': 2, 'name': 'Product 2', 'price': 20}]
    return jsonify(products=products)

if __name__ == '__main__':
    db.create_all()  # Create the database tables
    app.run(debug=True)
