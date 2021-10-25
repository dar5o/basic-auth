'use strict';

const logger = require('../src/middleware/logger');

describe('Given logger', () => {
  describe('When called', () => {
    it('passes to next function', async () => {
      let requestObject = {}
      let responseObject = {};
      let nextFunction = jest.fn();
    
      logger(requestObject, responseObject, nextFunction);
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});