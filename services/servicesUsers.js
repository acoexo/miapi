const getAllUsers=async function(req,res,next ){
    try {
        const{limit, offset}=req.query;
        if(limit&&offset){
            res.json({
                "name":"name",
                "surname":"surname"
            });  
        }else{
            res.send("Faltan parametros")
        };
    } catch (error) {
        next(error);
    }
    
};
const newUser=async function(req,res,next){
    try {
        const body=req.body;
        res.json({
            "op": "post",
            "data": body
        });
    } catch (error) {
        next(error);
    }
    
};
const deleteUser=async function(req, res,next){
    try {
        const {id}=req.params;
        res.json({
            "id":id,
            "op": "delete",
            "data":id
        });
    } catch (error) {
        next(error);
    }
    
};
const updateUser = async function(req, res, next){
    try {
        const {id}=req.params;
        const body=req.body;
        res.json({
            "op": "UPDATE",
            id,
            body
        });
    } catch (error) {
        next(error);
    }
    
};
module.exports={getAllUsers, newUser, deleteUser, updateUser};