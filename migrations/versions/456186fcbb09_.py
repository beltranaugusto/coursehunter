"""empty message

Revision ID: 456186fcbb09
Revises: 
Create Date: 2023-02-28 15:54:23.190367

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '456186fcbb09'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=220), nullable=False),
    sa.Column('password', sa.String(length=280), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('publisherMode', sa.Boolean(), nullable=True),
    sa.Column('publishertype', sa.Enum('university', 'academy', 'company', 'independent', 'other', name='publishertype'), nullable=True),
    sa.Column('img_url', sa.String(length=200), nullable=True),
    sa.Column('cloudinary_id', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cloudinary_id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('img_url'),
    sa.UniqueConstraint('username')
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('author_name', sa.String(length=200), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('detail', sa.String(length=3000), nullable=False),
    sa.Column('categories', sa.String(length=200), nullable=False),
    sa.Column('event', sa.Boolean(), nullable=False),
    sa.Column('alwaysAvailable', sa.Boolean(), nullable=False),
    sa.Column('location', sa.String(length=500), nullable=True),
    sa.Column('online', sa.Boolean(), nullable=False),
    sa.Column('date', sa.DateTime(timezone=True), nullable=True),
    sa.Column('duration', sa.String(length=200), nullable=False),
    sa.Column('certificate', sa.Boolean(), nullable=False),
    sa.Column('creationDate', sa.DateTime(timezone=True), server_default='2023-02-28 15:54:22.661648', nullable=True),
    sa.Column('img_url', sa.String(length=200), nullable=False),
    sa.Column('cloudinary_id', sa.String(length=200), nullable=False),
    sa.ForeignKeyConstraint(['categories'], ['categories.name'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cloudinary_id'),
    sa.UniqueConstraint('img_url')
    )
    op.create_table('askedinfo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites')
    op.drop_table('askedinfo')
    op.drop_table('post')
    op.drop_table('user')
    op.drop_table('categories')
    # ### end Alembic commands ###
