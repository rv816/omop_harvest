from django.db.models import fields
from south.db import postgresql_psycopg2 as pgsql
from omop_harvest.dbops import generic as custom


class DatabaseOperations(pgsql.DatabaseOperations, custom.DatabaseOperations):

    create_sequence = ("CREATE SEQUENCE %(sequence)s OWNED BY"
                       " %(table_name)s.%(column)s")
    drop_sequence = "DROP SEQUENCE IF EXISTS %(sequence)s"
    set_sequence_val = ("SELECT setval('%(sequence)s', (SELECT MAX(%(column)s)"
                        " FROM %(table_name)s))")
    alter_string_set_seq = ("ALTER COLUMN %(column)s SET DEFAULT"
                            " nextval('%(sequence)s'::regclass)")

    def create_seq_name(self, **params):
        return self.create_index_name(params['table_name'],
                                      params['column'], "_seq")

    def _db_type_for_alter_column(self, field):
        if isinstance(field, fields.AutoField):
            return 'integer'
        else:
            sup = super(DatabaseOperations, self)
            return sup._db_type_for_alter_column(field)

    def _alter_add_column_mods(self, field, name, params, sqls):
        params['sequence'] = self.create_seq_name(**params)
        if isinstance(field, fields.AutoField):
            self.execute(self.create_sequence % params)
            self.execute(self.set_sequence_val % params)
            sqls.append((self.alter_string_set_seq % params, []))
        sup = super(DatabaseOperations, self)
        sup._alter_add_column_mods(field, name, params, sqls)

    def _alter_set_defaults(self, field, name, params, sqls):
        if isinstance(field, fields.AutoField):
            pass
        else:
            sup = super(DatabaseOperations, self)
            sup._alter_set_defaults(field, name, params, sqls)

    def _update_nulls_to_default(self, params, field):
        if not isinstance(field, field.AutoField):
            self.execute(self.drop_sequence % params)
        sup = super(DatabaseOperations, self)
        sup._update_nulls_to_default(params, field)
