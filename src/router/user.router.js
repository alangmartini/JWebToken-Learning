const express = require('express');
const { userController } = require('../controllers');
const verifyJWT = require('../middleware/auth/jwt');

const router = express.Router();

router.get('/', verifyJWT, userController.findAll);

router.get('/:id', verifyJWT, userController.findById);

module.exports = router;
