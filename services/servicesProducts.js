const faker = require('faker');
const boom=require('@hapi/boom');
const pool = require('../libs/postgres');
const getAllProducts = async function(req, res){
    try {
        const query='SELECT * FROM tasks';
        const response = await pool.query(query)
        return response
    } catch (error) {
        console.log(error)
    }
    
}
module.exports={getAllProducts};