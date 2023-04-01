const Boom = require('@hapi/boom');
const models = require('../models');
const { comparePassword } = require('../middleware/auth/utils');

const login = async (email, username, password) => {
  try {    
    const user = await models.User.findOne({ where: { email, username } });

    if (!user) throw Boom.notFound('User not found');

    const userData = user.dataValues;

    const isPasswordValid = await comparePassword(password, userData.password);
    
    if (!isPasswordValid) throw Boom.badRequest('Invalid password');
    
    return user;
  } catch (e) {
    if (Boom.isBoom(e)) {
      throw e;
    }

    throw Boom.internal(e);
  }
};

module.exports = {
  login,
};
