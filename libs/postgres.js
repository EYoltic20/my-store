const {Client} = require('pg');


async function getConnection(){
  const cliente = new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'AjdoqnAouk45',
    database:'mystore'

  })
  await cliente.connect();
  return cliente
}

module.exports = getConnection;
