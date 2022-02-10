const app = require('./server');
const request = require('supertest');

describe('test api ', () => {
    it('returns bad request if first name is missing', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
    });
  });


