'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "post_comment", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "post_comment_table",
    "created": "2021-07-09T23:52:14.679Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "post_comment",
        {
            "comment_id": {
                "type": Sequelize.INTEGER.UNSIGNED,
                "field": "comment_id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "post_id": {
                "type": Sequelize.INTEGER,
                "field": "post_id",
                "allowNull": false
            },
            "user_id": {
                "type": Sequelize.INTEGER,
                "field": "user_id",
                "allowNull": false
            },
            "title": {
                "type": Sequelize.STRING(75),
                "field": "title",
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "defaultValue": Sequelize.Literal,
                "allowNull": false
            },
            "content": {
                "type": Sequelize.TEXT,
                "field": "content",
                "allowNull": true
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
