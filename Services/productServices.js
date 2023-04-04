const faker = require('faker')

class ProductServices{
  constructor(){
    this.products =[];
    this.generate();
  }
  generate(){
    for (let i = 0 ; i<50;i++){
      this.products.push({
        id:i+1,
        name:faker.commerce.productName(),
        price:parseInt(faker.commerce.price(),10),
        image:faker.image.imageUrl()
      })
    }
  }
  all(){
    return this.products;
  }
  find(id){
    return this.products.find(item => item.id === id)
  }
  create(body){
    try{
      this.products.push(body)
      return true
    } catch(error){
      return false
    }
  }
  update(id,changes){
    const index = this.products.findIndex(item=>item.id===id)
    if(id===-1){
      throw new Error('no se encontro')
  }else{
    this.products[index] = changes
  }
  }

}

module.exports = ProductServices;
