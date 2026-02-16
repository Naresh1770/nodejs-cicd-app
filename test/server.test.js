const request = require('supertest');
const server = require('../server');

describe('GET /', () => {
  it('should return success message', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('CI/CD App');
  });

  afterAll(() => {
    server.close();
  });
});
