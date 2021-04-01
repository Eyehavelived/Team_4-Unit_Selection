require('dotenv').config()

// TODO: user password will need to be hidden with Vault when we get to deploying them
// otherwise anyone would be able to access our db just by reading our code.
let config = {
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DB,
        password: process.env.MYSQL_PASS,
        multipleStatements: true
    }
}

module.exports = require("knex")(config)