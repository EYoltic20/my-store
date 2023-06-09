const { ValidationError } = require("sequelize");

function logError(err,req,res,next){
  next(err);//mid de tipo de error
}

function errorHandler(err,req,res,next){
  res.status(500).json({
    message:err.message,
    stack:err.stack
  })
}

function ormErrorHandler(err,req,res,next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode:409,
      message:err.name,
      errors:err.errors
    })
  }
  next(err)
}
function boomErrorHandler(err,req,res,next){
  if (err.isBoom){
    const { output } =err;
    res.sendStatus(output.statusCode).json(output.payload)
  }
    next(err);
}

module.exports = {logError,errorHandler,boomErrorHandler};
