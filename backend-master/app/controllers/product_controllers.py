from flask import Blueprint, request, jsonify
from app.extensions import db
from sqlalchemy.exc import SQLAlchemyError

# Create a Blueprint for product routes
product_bp = Blueprint('product_bp', __name__)

# CREATE a new product
@product_bp.route('/', methods=['POST'])
def create_product():
    from app.models.product import Product  # Import here to avoid circular import

    data = request.get_json()
    image = data.get('image')
    name = data.get('name')
    description = data.get('description')
    price = data.get('price')
    stock = data.get('stock')
    user_id = data.get('user_id')

    if not (image and name and description and price and stock and user_id):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        new_product = Product(
            image=image,
            name=name,
            description=description,
            price=price,
            stock=stock,
            user_id=user_id
        )

        db.session.add(new_product)
        db.session.commit()

        return jsonify({'message': 'Product created successfully', 'product': new_product.id}), 201

    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


# READ (get) all products
@product_bp.route('/', methods=['GET'])
def get_products():
    from app.models.product import Product  # Import here

    try:
        products = Product.query.all()
        product_list = [
            {
                'id': product.id,
                'name': product.name,
                'description': product.description,
                'price': product.price,
                'stock': product.stock,
                'user_id': product.user_id
            }
            for product in products
        ]

        return jsonify({'products': product_list}), 200

    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 500


# READ (get) a single product by ID
@product_bp.route('/<int:id>', methods=['GET'])
def get_product(id):
    from app.models.product import Product  # Import here

    try:
        product = Product.query.get_or_404(id)
        product_data = {
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'stock': product.stock,
            'user_id': product.user_id
        }

        return jsonify({'product': product_data}), 200

    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 500


# UPDATE a product
@product_bp.route('/<int:id>', methods=['PUT'])
def update_product(id):
    from app.models.product import Product  # Import here

    try:
        product = Product.query.get_or_404(id)
        data = request.get_json()

        product.name = data.get('name', product.name)
        product.description = data.get('description', product.description)
        product.price = data.get('price', product.price)
        product.stock = data.get('stock', product.stock)

        db.session.commit()

        return jsonify({'message': 'Product updated successfully'}), 200

    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


# DELETE a product
@product_bp.route('/<int:id>', methods=['DELETE'])
def delete_product(id):
    from app.models.product import Product  # Import here

    try:
        product = Product.query.get_or_404(id)
        db.session.delete(product)
        db.session.commit()

        return jsonify({'message': 'Product deleted successfully'}), 200

    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500