from app import create_app
from flask_migrate import Migrate
from app.extensions import db  # Make sure db is imported

app = create_app()
migrate = Migrate(app, db)  # Initialize Migrate with app and db

if __name__ == "__main__":
    app.run(debug=True)








# from app import create_app
# from flask_migrate import MigrateCommand
# from flask_script import Manager

# app = create_app()
# manager = Manager(app)
# manager.add_command('db', MigrateCommand)

# if __name__ == "__main__":
#     manager.run()
