'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.server);

describe('Given /bad', () => {
  describe('When GET', () => {
    it('returns 500 status', async () => {
      const response = await request.get('/bad');
      expect(response.status).toStrictEqual(500);
    });

    it('returns correct error object', async () => {
      const response = await request.get('/bad');
      expect(response.body).toStrictEqual(
        {
          error: "critical error",
          route: '/bad',
          query: {},
          body: {},
          message: '500/Server Error'
        }
      );
    });
  });
});