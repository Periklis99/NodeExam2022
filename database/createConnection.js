import mysql from 'mysql2/promise'
import 'dotenv/config';

const connection = await mysql.createConnection({
    host     : process.env.DBHOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : 'webshop',
  });

  export default connection;