"""empty message

Revision ID: 6e84cd3d048a
Revises: ff02fb218600
Create Date: 2023-05-03 21:44:32.331908

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '6e84cd3d048a'
down_revision = 'ff02fb218600'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('birthdate', sa.DateTime(), nullable=True))
        batch_op.drop_column('birth_date')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('birth_date', postgresql.TIMESTAMP(), autoincrement=False, nullable=True))
        batch_op.drop_column('birthdate')

    # ### end Alembic commands ###