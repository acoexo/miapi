const express = require('express');
const router=express.Router();
const servicesUsers = require('../services/servicesUsers');
router.get('/',async function(req, res, next){
    try {
        const getUsers= await servicesUsers.getAllUsers(req, res)
        console.log(getUsers);
        return res.send(getUsers);
    } catch (error) {
        next(error);
    }
   
});
module.exports=router;