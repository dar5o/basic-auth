'use strict'; 

const express = require('express');
const app = express();
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const basicAuth = require('../middleware/decoding.js')

const { User } = require('../models/index.js')
const router = express.Router();
router.post('/signin', decoding, signIn);

async function signIn(request, response) {
  try {
    let authString = request.headers.authorization;
    let encodedUserPassword = authString.split(' ')[1];
    let decodedUserPassword = base64.decode(encodedUserPassword);
    let [ user, password ] = decodedUserPassword.split(':')

    let userQuery = await User.findOne({ where: {
      username: user
    }
  });
  let isValidPassword = await bcrypt.compare(password, userQuery.password);
    if(isValidPassword) {
      response.send(userQuery);
    } else {
      response.status(401).send('Invalid Login');
    }
  } catch(error) {
    response.status(401).send('Invalid Login: Error in request');
  }
}

module.exports = router;
