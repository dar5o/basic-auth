'use strict';

const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../models/index.js');

const router = express.Router();

router.post('/signup', signUp);

async function signUp(request, response) {
  let userData = request.body;
  console.log(userData , 'this is userdata');
  let newUser = await User.create({
    username: userData.username,
    password: userData.password
  });
  response.send(newUser);
}

module.exports = router;
