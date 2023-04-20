'use strict';


const {PRODUCT_TABLE,ProductSchema} = require('./../models/productModel')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema)
    await queryInterface.addColum(PRODUCT_TABLE,'categoria',ProductSchema.categoria)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(PRODUCT_TABLE)
  }
};
