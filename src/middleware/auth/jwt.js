const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { userService } = require('../../services');

const secret = process.env.JWT_SECRET;

const verifyJWT = async (req, res, next) => {
  const token = req.headers.authorization;
    
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await userService.findById(decoded.data.id);
      
    req.user = user;
    return next();
  } catch (error) {
    return next(Boom.unauthorized(error.message));
  }
};

module.exports = verifyJWT;
