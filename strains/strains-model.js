const db = require('../data/dbConfig');

function findAllStrains() {
  return db('strains').select();
}

function findStrainBy(filter) {
  return db('strains').where(filter);
}

function findStrainById(id) {
  return 'strains'
    .orderBy('name')
    .where({ id })
    .first();
}

async function addStrain(strain) {
  const [id] = await db('users_strains').insert(strain);
  return db('users_strains')
    .where({ id })
    .first();
}

module.exports = {
  findAllStrains,
  findStrainBy,
  addStrain,
  findStrainById
};
