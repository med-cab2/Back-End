const db = require('../data/dbConfig');

function findUsersStrain(id) {
  return db('users_strains as us')
    .join('users as u', 'u.id', 'us.users_id', 'strains as s')
    .select('us.id', 'u.username', 's.name', 's.qualities')
    .where({ users_id: id });
}

function findUsersStrainsBy(filter) {
  return db('users_strains')
    .where(filter)
    .first();
}

async function addUsersStrains(strains) {
  const [id] = await db('users_strains').insert(strains, 'id');

  return findUsersStrainsBy(id);
}

function removeUsersStrains(strain_id, users_id) {
  return db('users_strains')
    .where({ user_id: users_id, strain_id: strain_id })
    .del()
    .then(() => {
      return db('users_strains as us')
        .join('strains as s', 'us.strain_id', 's.id')
        .select('us.strain_id', 's.*')
        .where({ users_id: user_id });
    });
}

module.exports = {
  findUsersStrain,
  findUsersStrainsBy,
  addUsersStrains,
  removeUsersStrains
};
