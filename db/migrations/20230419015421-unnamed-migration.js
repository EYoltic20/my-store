'use strict';

const {PRODUCT_TABLE,ProductSchema} = require('./../models/productModel')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(PRODUCT_TABLE,'categoria',ProductSchema.categoria)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
