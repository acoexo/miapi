const pool = require('../libs/postgres');

const getAllUsers=async function(req,res){
    try{
        const query= 'SELECT * FROM tasks'
        const response = await pool.query(query)
        return response.rows
    }catch(error){
        console.log(error)
    }
    
};

module.exports={getAllUsers};