const {User,UserSchema} = require('./userModel');
const {Product,ProductSchema} = require('./productModel');

function setUPModels(sequelize){
  User.init(UserSchema,User.config(sequelize));
  Product.init(ProductSchema,Product.config(sequelize));
}

module.exports = setUPModels;
