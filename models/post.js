module.exports = function(sequelize, DataTypes) {
    return sequelize.define('post', {
      post_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      title: {
        type: DataTypes.STRING(75),
        allowNull: false
      },

      published: {
        type: DataTypes.BOOLEAN(1), 
        allowNull: false,
        defaultValue: 0
      },
    
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },

      content: {
        type: DataTypes.TEXT, 
        allowNull: false,
      },

      
    }, {
      tableName: 'post'
    });
  };