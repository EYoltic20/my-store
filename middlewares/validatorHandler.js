const boom = require('@hapi/boom')

function validatorHandler(schema,property){
  return(req,res,next)=>{
    const data = req[property];
    const { error } = schema.validate(data,{aboutEarly:false})
    if (error){
      next(boom.notFound(error))
    }
    next();
  }
}

module.exports= validatorHandler
