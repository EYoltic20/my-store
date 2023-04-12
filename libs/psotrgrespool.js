const {Pool} = require('pg');
const { config } =  require('../config/config')

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword)
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const pool = new Pool({connectionString:URI});
// const pool = new Pool({
//   host:config.dbHost,
//   port:config.dbPort,
//   user:config.dbUser,
//   password:config.dbPassword,
//   database:config.dbName
// });





module.exports = pool;
