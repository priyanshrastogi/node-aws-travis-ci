const app = require('../app');
const request = require('supertest');

it('Running Successfully', done => {
  request(app)
  .get('/')
  .expect(200)
  .end(done)
});
