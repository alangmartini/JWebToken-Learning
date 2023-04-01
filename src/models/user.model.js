/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User', 
  {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
      {
        timestamps: false,
        underscored: true,
        tableName: 'Users',
      },
    );

    return User;
};