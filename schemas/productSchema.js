const joi = require('joi')

const id =joi.string().uuid();
const name = joi.string()
const price = joi.number().integer();
const categoria = joi.string()

const createProductSchema= joi.object({
  name:name.required(),
  price:price.required(),
  categoria:categoria.required

})

const updatePrice = joi.object({
  name:name,
  price:price
})

const getProductSchema = joi.object({
  id:id.required(),
})

module.exports ={createProductSchema,updatePrice,getProductSchema}
