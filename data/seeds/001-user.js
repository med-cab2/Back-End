const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      first_name: 'Chris',
      last_name: 'Shockley',
      date_of_birth: 'May, 08, 1979',
      email: 'c.shock08@gmail.com',
      location: 'Ohio',
      username: 'user1',
      password: bcrypt.hashSync('password', 11)
    },
    {
      first_name: 'Jas',
      last_name: 'Shockley',
      date_of_birth: 'January, 05, 1989',
      email: 'j.shock@gmail.com',
      location: 'Colorage',
      username: 'user2',
      password: bcrypt.hashSync('password', 11)
    }
  ]);
};
