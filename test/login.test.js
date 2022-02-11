require('dotenv').config();
const request = require('supertest');
const Database = require('../service/Database');
const app = require('../server');

beforeAll(async () => {
  await Database.connect('InventoryApp-testing');
});

afterAll(async () => {
  await Database.disconnect();
});

beforeEach(() => {
});

afterEach(() => {
});

test('Status of login route should be 200', async () => {
  const res = await request(app).post('/login').send({
    employee_id: 1001,
    password: 'password'
  });

  expect(res.status).toBe(200);
});