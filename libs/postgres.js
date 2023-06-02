const {Pool} = require('pg');

const pool = new Pool({
    host:'localhost',
    port:5432,
    user:'acoexo',
    password:1234,
    database:'my_api'
});

module.exports = pool;