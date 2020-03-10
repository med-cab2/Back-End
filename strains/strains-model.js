const db = require('../data/dbConfig');

function findAllStrains() {
  return db('strains').select();
}

module.exports = {
  findAllStrains
};
