const express = require('express')
const routeApi = require('./routes');
const router = require('./routes/productRouter');
const app = express();


app.use(express.json());
const port = process.env.PORT || 3000;

routeApi(app);











app.listen(port,()=>{
  console.log('mi port ' + port)
})
