'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "post", deps: []
 * createTable "post_comment", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "data",
    "created": "2021-07-19T04:25:17.704Z",
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
                "username": {
                    "type": Sequelize.STRING(255),
                    "field": "username",
                    "unique": true
                },
                "title": {
                    "type": Sequelize.STRING(75),
                    "field": "title",
                    "allowNull": false
                },
                "published": {
                    "type": Sequelize.BOOLEAN,
                    "field": "published",
                    "defaultValue": 0,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "defaultValue": Sequelize.Literal,
                    "allowNull": false
                },
                "content": {
                    "type": Sequelize.TEXT,
                    "field": "content",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
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
                "username": {
                    "type": Sequelize.STRING,
                    "field": "username",
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
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "user_id": {
                    "type": Sequelize.INTEGER,
                    "field": "user_id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "first_name": {
                    "type": Sequelize.STRING,
                    "field": "first_name"
                },
                "last_name": {
                    "type": Sequelize.STRING,
                    "field": "last_name"
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "unique": true
                },
                "username": {
                    "type": Sequelize.STRING(255),
                    "field": "username",
                    "unique": true
                },
                "password": {
                    "type": Sequelize.STRING(255),
                    "field": "password",
                    "allowNull": false
                },
                "profilePictureID": {
                    "type": Sequelize.BLOB,
                    "field": "profilePictureID"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "defaultValue": Sequelize.Literal
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "defaultValue": Sequelize.Literal
                }
            },
            {}
        ]
    }
];

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
