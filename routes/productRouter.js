const express = require('express')
const app = express();
const ProductServices = require('../Services/productServices')

const service = new ProductServices();
const router = express.Router()

// GETS
router.get('/',(req,res)=>{
  const products = service.all();
  res.json(products)
})


router.get('/:id',(req,res)=>{
  const product = service.find();
  res.json(product)
})
// End points de forma dinamica tiene que ser  despues de los estaticos

// POSTS

router.post('/',(req,res)=>{
  const response = service.create(req.body);
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


router.patch('/:id',(req,res)=>{
  const {id} = req.params
  const body = req.body
  res.json({
    messages:'update',
    data:body,
    id
  })
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
