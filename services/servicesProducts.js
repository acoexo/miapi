const faker = require('faker');
const boom=require('@hapi/boom');
const getAllProducts = async function(req, res){
    try {
        const products=[];
        const {size} = req.query;
        const limit=size||5;
        for(let index=0; index<limit; index++){
            products.push({
                name:faker.commerce.productName(),
                price: parseInt(faker.commerce.price(),10),
                image:faker.image.imageUrl()
            })
        };
        res.json(products);
    } catch (error) {
        console.log(error)
    }
    
}
const getOneProduct=async function(req, res){
    try {
        const{id}=(req.params);
        res.json({
            id,
            'name':'raton',
            'price':10.99,
            'category':'technology'
        });
    } catch (error) {
        console.log(error)
    }
    
}
const createNewProduct = async function(req, res){
    try {
        const body=req.body;
        res.json({
           "op": "post",
           "data": body
        });
    } catch (error) {
        console.log(error)
    }
    
}
const deleteProduct = async function(req,res){
    try {
        const {id}=req.params;
        res.json({
            "op": "delete",
            id
        });
    } catch (error) {
        console.log(error)
    }
   
}
const updateProduct=async function(req,res){
    try {
        const {id}=req.params;
        if(id!=1){
            throw boom.notFound(`KLK cantapuelca, id:${id} no encontrado producto de`);
        }
        const body=req.body
        res.json({
            "op": "UPDATE",
            id,
            body
        });
    } catch (error) {
        res.json(error);
        console.log(error)
    }
    
}
module.exports={getAllProducts, getOneProduct, createNewProduct,deleteProduct,updateProduct};