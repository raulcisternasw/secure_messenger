'use strict'

const router          = require('express').Router();
const user_controller = require('../controllers/userController');

router.get('/user/:id', user_controller.get_user);

module.exports = router;
