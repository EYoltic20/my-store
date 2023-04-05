const express = require('express')
const routeApi = require('./routes');
const router = require('./routes/productRouter');
const cors = require('cors')
const {logError,errorHandler,boomErrorHandler} = require('./middlewares/errorHandler')
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

routeApi(app);
// midd despues del routing

// COmportamiento secuencial
app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler)










app.listen(port,()=>{
  console.log('mi port ' + port)
})
