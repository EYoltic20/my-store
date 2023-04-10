function logError(err,req,res,next){
  next(err);//mid de tipo de error
}

function errorHandler(err,req,res,next){
  res.status(500).json({
    message:err.message,
    stack:err.stack
  })
}

function boomErrorHandler(err,req,res,next){
  if (err.isBoom){
    const { output } =err;
    res.sendStatus(output.statusCode).json(output.payload)
  }
    next(err);
}

module.exports = {logError,errorHandler,boomErrorHandler};
