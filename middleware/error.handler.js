//middleware que se encatga de la gestión de errores
function errorLogs(err, req, res, next){
    console.log("errorlog");
    console.error(err);
    next();

}
function handlerError(err, req, res, next){
    console.log("handleError");
    res.status(501).json({
        message:err.message,
        stack:err.stack
    });

}

module.exports={errorLogs, handlerError};