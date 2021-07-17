const { MEDIUMINT } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('users', {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    username: {
      type: DataTypes.STRING(255),
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    profilePictureID: {
      type: DataTypes.BLOB,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
  },

    {
      tableName: 'users'
    });

  return users;
};

