const { Router } = require('express');
const bcrypt = require('bcrypt');
const { Users } = require('../models');

const saltRounds = 10;

