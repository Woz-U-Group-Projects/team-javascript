'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "user_id" from table "post"
 * addColumn "username" to table "post"
 *
 **/

var info = {
    "revision": 3,
    "name": "Migration_V",
    "created": "2021-07-17T16:54:30.774Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["post", "user_id"]
    },
    {
        fn: "addColumn",
        params: [
            "post",
            "username",
            {
                "type": Sequelize.STRING(255),
                "field": "username",
                "unique": true
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
