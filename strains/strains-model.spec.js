const db = require('../database/dbConfig.js');
const strainModel = require('./post-model.js');

beforeEach(async () => {
  await db.seed.run();
});
describe('strains model', () => {
  test('getAll', async () => {
    const all = await strainModel.findAllStrains();
    expect(all).toHaveLength(4);
  });
});
