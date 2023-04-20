const {Model, DataTypes,Sequelize} = require('sequelize');

const PRODUCT_TABLE = 'product';

const ProductSchema ={
  id:{
    allowNull:false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,

  },
  name:{
    allowNull:false,
    type:DataTypes.STRING
  },
  price:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  categoria:{
    allowNull:true,
    type:DataTypes.STRING
  },
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue:Sequelize.NOW
  },
  updatedAt:{
    allowNull: true,
    type: DataTypes.DATE
  }
}


class Product extends Model{
  static associatte(){
// cuando se asocie
  }
  static config(sequelize){
    return{
      sequelize,
      tableName:PRODUCT_TABLE,
      modelName:'Product',
      timestamp:false
    }
  }
}

module.exports = {Product,ProductSchema,PRODUCT_TABLE}
