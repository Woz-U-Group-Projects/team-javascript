'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "post", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "Team_Migration_Post",
    "created": "2021-07-09T19:05:03.936Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "post",
        {
            "post_id": {
                "type": Sequelize.INTEGER.UNSIGNED,
                "field": "post_id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "user_id": {
                "type": Sequelize.INTEGER,
                "field": "user_id",
                "allowNull": false
            },
            "last_update": {
                "type": Sequelize.DATE,
                "field": "last_update",
                "defaultValue": Sequelize.Literal,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
