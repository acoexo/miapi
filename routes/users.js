var express = require('express');
const router=express.Router();
const servicesUsers = require('../services/servicesUsers');
router.get('/',async function(req, res, next){
    try {
        const users= await servicesUsers.getAllUsers(req, res)
        return (users);
    } catch (error) {
        next(error);
    }
   
})
router.post('/',async function(req, res, next){
    try {
        const newUser= await servicesUsers.newUser(req, res);
        return newUser;
    } catch (error) {
        next(error);
    }
   
})
router.delete('/:id',async function(req, res, next){
    try {
        const deleteUser= servicesUsers.deleteUser(req, res);
        return deleteUser;
    } catch (error) {
        next(error);
    }
})
router.patch('/:id',async function(req, res, next){
    try {
        const updateUser = servicesUsers.updateUser(req, res);
        return updateUser;
    } catch (error) {
        next(error);
    }
})
module.exports=router;