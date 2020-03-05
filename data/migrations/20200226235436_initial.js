exports.up = async function(knex) {
  await knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('first_name', 128).notNullable();
    tbl.string('last_name', 128).notNullable();
    tbl.date('date_of_birth').notNullable();
    tbl
      .string('email', 128)
      .notNullable()
      .unique();
    tbl.string('location').notNullable();
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
  });

  await knex.schema.createTable('strains', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.text('description');
    tbl.text('aroma');
    tbl.text('qualities');
  });

  await knex.schema.createTable('users_strains', tbl => {
    tbl
      .integer('users_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .integer('strain_id')
      .notNullable()
      .references('id')
      .inTable('strains')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = async function(knex) {
  await knex.schema.raw('DROP TABLE IF EXISTS "users" CASCADE');
  await knex.schema.raw('DROP TABLE IF EXISTS "strains" CASCADE');
  await knex.schema.raw('DROP TABLE IF EXISTS "users_strains" CASCADE');
};
