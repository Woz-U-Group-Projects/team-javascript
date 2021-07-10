'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "last_update" from table "post"
 * addColumn "title" to table "post"
 * addColumn "published" to table "post"
 * addColumn "content" to table "post"
 * changeColumn "updatedAt" on table "post"
 *
 **/

var info = {
    "revision": 3,
    "name": "Updated_Post_Table",
    "created": "2021-07-10T18:45:03.799Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["post", "last_update"]
    },
    {
        fn: "addColumn",
        params: [
            "post",
            "title",
            {
                "type": Sequelize.STRING(75),
                "field": "title",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "post",
            "published",
            {
                "type": Sequelize.BOOLEAN,
                "field": "published",
                "defaultValue": 0,
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "post",
            "content",
            {
                "type": Sequelize.TEXT,
                "field": "content",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "post",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "defaultValue": Sequelize.Literal,
                "allowNull": false
            }
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
