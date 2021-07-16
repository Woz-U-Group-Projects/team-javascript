module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
     
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
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
);

// users.associate = (models) => {
//   Users.hasMany(models.Likes, {
//     onDelete: "cascade",
//   });

//   users.hasMany(models.Posts, {
//     onDelete: "cascade",
//   });
// };

  return users;
};

