const Boom = require('@hapi/boom');
const models = require('../models');

const findAll = async () => {
  try {
    const users = await models.User.findAll();
    
    if (!users) throw Boom.notFound('Users not found');
    
    return users;
  } catch (error) {
    if (error.isBoom) throw error;
    throw Boom.internal(error);
  }
};

const findById = async (id) => {
  try {
    const user = await models.User.findByPk(id);

    if (!user) throw Boom.notFound('User not found');

    return user;
  } catch (error) {
    throw Boom.internal(error);
  }
};

module.exports = {
  findAll,
  findById,
};
