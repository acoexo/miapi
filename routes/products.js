var express = require('express');
const router=express.Router();
const productServices=require('../services/servicesProducts');
const {validatorHandler}=require('../middleware/validator.handler');
const {schemaProductGet, schemaProductCreate, schemaProductUpdate}=require('../schema/productosSchema');


router.get('/',async function(req, res, next){
    try {
        const products =await productServices.getAllProducts(req, res);
        return(products);
    } catch (error) {
        next(error);
    }
});
router.get('/:id',validatorHandler(schemaProductGet,'params'),async function(req, res, next){
    try {
        const oneProduct= await productServices.getOneProduct(req,res);
        return (oneProduct);
    } catch (error) {
        next(error);
    }
    
});
router.post('/',validatorHandler(schemaProductCreate, 'body'),async function(req, res, next){
    try {
        const newProduct= await productServices.createNewProduct(req,res);
        return newProduct;
    } catch (error) {
        next(error);
    }
  
});
router.delete('/:id',validatorHandler(schemaProductGet, 'params'),async function(req, res, next){
    try {
        const deleteProduct =await  productServices.deleteProduct(req, res);
        return deleteProduct;
    } catch (error) {
        next(error);
    }
    
}) ;
router.patch('/:id',validatorHandler(schemaProductUpdate, 'params'),async function(req, res, next){
    try {
        const updateProduct = await productServices.updateProduct(req, res);
        return updateProduct;
    } catch (error) {
        next(error);
    }
   
});
module.exports=router;