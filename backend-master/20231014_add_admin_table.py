from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'xxxxxxxxxx'  # This will be generated automatically
down_revision = 'previous_revision_id'  # Replace with the actual previous revision ID
branch_labels = None
depends_on = None

def upgrade():
    # Create the admins table
    op.create_table(
        'admins',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('email', sa.String(length=150), unique=True, nullable=False),
        sa.Column('password', sa.String(length=150), nullable=False),
    )

def downgrade():
    # Drop the admins table
    op.drop_table('admins')
