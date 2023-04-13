const {User,UserSchema} = require('./userModel');

function setUPModels(sequelize){
  User.init(UserSchema,User.config(sequelize));
}

module.exports = setUPModels;
