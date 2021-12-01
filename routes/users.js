const express = require('express');
const { logUser, addUser } = require('../controllers/users');

const router = express.Router()

router.route('/login')
    .post(logUser)

router.route('/register')
    .post(addUser);


module.exports = router;