const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  db.connect((err) => {
      if(err) {
          throw err;
      }
      console.log('Conneted to the DataBase')
  });
  
module.exports = db;