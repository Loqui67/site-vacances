const dotenv = require('dotenv');
const mysql = require('mysql')
dotenv.config();

module.exports = {
    port: process.env.PORT,


    database: mysql.createPool({
        connectionLimit: 10,
        user: process.env.DATABASE_USERNAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        debug: false,
        dateStrings: true
    })
}