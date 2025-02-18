from flask import Flask, jsonify
from app.extensions import db, jwt, bcrypt
import logging
from flask_cors import CORS
from flask_migrate import Migrate

def create_app():
    app = Flask(__name__)

    # Configure your app (database, JWT, etc.)
    app.config.from_object('config.Config')

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    migrate = Migrate(app, db)  # Added Flask-Migrate

    # Enable CORS globally for all routes starting with "/api/*"
    # CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})  # Enable CORS for your API
    CORS(app, resources={r"/*": {"origins": "http://localhost:3002"}})

    # Import models for Flask-Migrate to detect
    from app.models.admin import Admin  # Added Admin model import
    from app.models.user import User
    from app.models.product import Product
    from app.models.order import Order

    # Register Blueprints
    from app.controllers.user_controllers import user_bp
    from app.controllers.product_controllers import product_bp
    from app.controllers.order_controllers import order_bp
    from app.controllers.refresh_token import refresh_bp

    app.register_blueprint(user_bp, url_prefix='/api/v1/users')
    app.register_blueprint(product_bp, url_prefix='/api/v1/products')
    app.register_blueprint(order_bp, url_prefix='/api/v1/orders')
    app.register_blueprint(refresh_bp)  # Register the refresh token blueprint

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




# from flask import Flask, jsonify
# from app.extensions import db, jwt, bcrypt
# import logging
# from flask_cors import CORS  



# def create_app():
#     app = Flask(__name__)

#     # Configure your app (database, JWT, etc.)
#     app.config.from_object('config.Config')

#     # Initialize extensions
#     db.init_app(app)
#     jwt.init_app(app)
#     bcrypt.init_app(app)

#     # Enable CORS globally for all routes starting with "/api/*"
#     # CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})  # Enable CORS for your API
#     CORS(app, resources={r"/*": {"origins": "http://localhost:3002"}})

#     # Register Blueprints
#     from app.controllers.user_controllers import user_bp
#     from app.controllers.product_controllers import product_bp
#     from app.controllers.order_controllers import order_bp
#     from app.controllers.refresh_token import refresh_bp
    

#     app.register_blueprint(user_bp, url_prefix='/api/v1/users')
#     app.register_blueprint(product_bp, url_prefix='/api/v1/products')
#     app.register_blueprint(order_bp, url_prefix='/api/v1/orders')
#     app.register_blueprint(refresh_bp)  # Register the refresh token blueprint
    

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