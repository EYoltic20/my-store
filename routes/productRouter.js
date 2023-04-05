const express = require('express')
const ProductServices = require('./../Services/productServices')
const validetorHandler = require('./../middlewares/validatorHandler');
const {createSchema,updatePrice,getProductSchema}=require('../schemas/productSchema')


const service = new ProductServices();
const router = express.Router()

// GETS
router.get('/',async (req,res)=>{
  const products = await service.all();
  res.json(products)
})


router.get('/:id',validetorHandler(getProductSchema,'params'), async(req,res,next)=>{
  try{
    const { id } = req.params
    const product = await service.find(id);
    res.json(product)
  }catch(error){
    next(error)
  }

})
// End points de forma dinamica tiene que ser  despues de los estaticos

// POSTS

router.post('/',async (req,res)=>{
  const response = await service.create(req.body);
  if (response){
    res.json({
      messages:'created'
    })
  }
  else{
    res.statusCode(404)
  }

})

// MODIFICAR


router.patch('/:id',async (req,res)=>{
  try{
  const {id} = req.params
  const body = req.body
  const product   = await service.update(id,body)
  res.json(product)
  }catch(error){
    res.status(404).json({messages:error.messages})
  }
})


// BORRAR
router.delete('/deleted/:id',(req,res)=>{
  const {id} =req.params
  res.json({
    messages:'deleted '+id,
    id
  })
})

// PATCH AND PUT


module.exports=router;
