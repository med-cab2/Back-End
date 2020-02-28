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
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
  });

  await knex.schema.createTable('strains', tbl => {
    tbl.increments();
    tbl.string('strain_name').nonNullable();
    tbl.string('strain_image');
    tbl.string('strain_description');
    tbl.string('strain_aroma');
    tbl.string('strain_qualities');
  });

  await knex.schema.createTable('saved_strains', tbl => {
    tbl.increments();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('strains');
  await knex.schema.dropTableIfExists('saved_strains');
};
