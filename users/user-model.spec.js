const db = require('../data/dbConfig.js');
const userModel = require('./user-model.js');

const newUser = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'user5@gmail.com',
  date_of_birth: 'January 1, 1997',
  username: 'user5',
  password: 'password'
};

describe('user model', () => {
  beforeEach(async () => {
    await db.seed.run();
  });

  afterAll(async () => {
    await db.destroy();
  });

  test('find', async () => {
    const res = await userModel.find();
    expect(res.length).toBe(4);
  });

  test('findById', async () => {
    const res = await userModel.findById(1);
    expect(res.username).toBe('user1');
  });

  test('add', async () => {
    await userModel.add(newUser);
    const users = await db('users').select();
    expect(users).toHaveLength(5);
  });

  test('remove', async () => {
    await userModel.remove(1);
    const users = await userModel.find();
    expect(users).toHaveLength(3);
  });
});
