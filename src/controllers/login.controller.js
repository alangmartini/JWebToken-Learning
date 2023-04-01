const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const handleErrors = require('../middleware/errors/handleErrors');
const LoginServices = require('../services/login.service');

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return  next(Boom.badRequest('All fields must be filled'));
    }

    const user = await LoginServices.login(email, username, password);

    const token = jwt
      .sign({ data: { id: user.id } }, secret, { expiresIn: '7d', algorithm: 'HS256' });

    res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

const logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    
    jwt.destroy(token);
    
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  login,
  logout,
};
