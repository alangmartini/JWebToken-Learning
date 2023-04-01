const userService = require('../services/user.service');

const findAll = async (req, res, next) => {
  try {
    const users = await userService.findAll();
    
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const user = await userService.findById(id);
    
    res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  findAll,
  findById,
};
