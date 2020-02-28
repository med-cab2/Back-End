const db = require('../data/dbConfig');

function find() {
  return db('users').select('username', 'password');
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .findBy();
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function update(id, body) {
  await db('users')
    .where({ id })
    .update(body);
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
};
