const supertest = require('supertest');
//remember our server wount actually start
// due to the if statement in index.js
const server = require('../api/server');
const db = require('../data/dbConfig');

beforeEach(async () => {
  await db.seed.run;
});

test('strains list', async () => {
  const res = await supertest(server).get('/');
  expect(res.status).toBe(200);
  expect(res.type).toBe('application/json');
  expect(res.body[0].id).toBe('2');
});
