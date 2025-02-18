from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
from app.extensions import db, jwt, bcrypt
from app.controllers.user_controllers import user_bp
from app.controllers.product_controllers import product_bp
from app.controllers.order_controllers import order_bp

def create_app():
    app = Flask(__name__)

    # Configure your app (database, JWT, etc.)
    app.config.from_object('config.Config')

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)

    # Enable CORS
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3002"}})

    # Register Blueprints
    app.register_blueprint(user_bp, url_prefix='/api/v1/users')
    app.register_blueprint(product_bp, url_prefix='/api/v1/products')
    app.register_blueprint(order_bp, url_prefix='/api/v1/orders')
    

    # Define a basic route to check if the server is up
    @app.route('/')
    def home():
        return 'Welcome to the API!'

    # Example route to test database connection
    @app.route('/test_db')
    def test_db():
        try:
            result = db.engine.execute('SELECT 1')
            return jsonify({'message': 'Database connection successful'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
        
    return app













# from flask import Flask, jsonify  # Import jsonify here
# from app.extensions import db, jwt, bcrypt
# from app.controllers.user_controllers import user_bp
# from app.controllers.product_controllers import product_bp
# from app.controllers.order_controllers import order_bp

# def create_app():
#     app = Flask(__name__)

#     # Configure your app (database, JWT, etc.)
#     app.config.from_object('config.Config')

#     # Initialize extensions
#     db.init_app(app)
#     jwt.init_app(app)
#     bcrypt.init_app(app)

#     # Register Blueprints
#     app.register_blueprint(user_bp)
#     app.register_blueprint(product_bp)
#     app.register_blueprint(order_bp)

#     # Define a basic route to check if the server is up
#     @app.route('/')
#     def home():
#         return 'Welcome to the API!'

#     # Example route to test database connection
#     @app.route('/test_db')
#     def test_db():
#         try:
#             result = db.engine.execute('SELECT 1')
#             return jsonify({'message': 'Database connection successful'}), 200
#         except Exception as e:
#             return jsonify({'error': str(e)}), 500
        
        

#     return app
