"""empty message

Revision ID: 3760b0ae0a37
Revises: 69c4f1c6cdda
Create Date: 2023-05-05 21:12:27.399139

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3760b0ae0a37'
down_revision = '69c4f1c6cdda'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=200),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)

    # ### end Alembic commands ###
