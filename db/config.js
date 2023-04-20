const { config } =  require('./../config/config')


const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword)
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
console.log(URI)

module.exports = {
  development:{
    url:URI,
    dialect:'postgres'
  },
  production:{
    url:URI,
    dialect:'postgres'
  }
}
