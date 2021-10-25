'use strict'

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.server);

describe('Given /iDoNotExist', () => {
  describe('When GET', () => {
    it('returns 404 status', async  () => {
      const response = await request.get('/iDoNotExist');
      expect(response.status).toStrictEqual(404);
    });
  });

  describe('When POST', () => {
    it('returns 404 status', async  () => {
      const response = await request.post('/iDoNotExist');
      expect(response.status).toStrictEqual(404);
    });
  });
});