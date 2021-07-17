module.exports = function(sequelize, DataTypes) {
    return sequelize.define('post_comment', {
      comment_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING(75),
        allowNull: false
      },
    
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },

    }, {
      tableName: 'post_comment'
    });
  };