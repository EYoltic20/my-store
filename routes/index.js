const productRouter = require('./productRouter')
const categoriasRouter = require('./categoriasRouter')
const userRouter = require('./userRouter')
const express=require('express')

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',productRouter)
  router.use('/categories',categoriasRouter)
  router.use('/user',userRouter)
}
module.exports=routerApi;
