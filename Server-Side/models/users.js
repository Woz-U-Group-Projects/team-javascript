const { MEDIUMINT } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  const Users = sequelize.define('Users', {
    
    username: {
      type: DataTypes.STRING(255),
      unique: true
    },
    
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    first_name: DataTypes.STRING,

    last_name: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      unique: true
    },

    profilePictureID: {
      type: DataTypes.BLOB
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

    Users.associate = (models) => {
      Users.hasMany(models.Likes, {
        onDelete: "cascade",
      });
  
      Users.hasMany(models.Posts, {
        onDelete: "cascade",
      });
    };
  
    return Users;
  };
  