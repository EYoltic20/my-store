const faker = require('faker')
const boom = require('@hapi/boom')
const getConnection = require('../libs/postgres')
const pool = require('../libs/psotrgrespool');
const sequelize = require('../libs/sequelize')
class ProductServices{
  constructor(){
    // pool
    // this.pool = pool
    // this.pool.on('error',(err)=>console.log(err))
    this.products =[];
    this.generate();
  }
  async generate(){
    for (let i = 0 ; i<50;i++){
      this.products.push({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:parseInt(faker.commerce.price(),10),
        image:faker.image.imageUrl()
      })
    }
  }
  async all(){
    // pool
    const query = 'SELECT * FROM tasks';
    // const rtados = await this.pool.query(query)
    // const product = await getConnection();
    const [data,metadata] = await sequelize.query(query)
    // const rta = await product.query('SELECT * FROM tasks')
    return data;
  }
  async find(id){
    const product =  this.products.find(item => item.id === id)
    if(!product){
      throw boom.notFound('no se encontro el producto');
    }
    return product;
  }
  async create(body){
    try{
      this.products.push(body)
      return true
    } catch(error){
      return false
    }
  }
  async update(id,changes){
    const index = this.products.findIndex(item=>item.id===id)
    if(id===-1){
      throw boom.notFound;
  }else{
    this.products[index] = changes
  }
  }

}

module.exports = ProductServices;
