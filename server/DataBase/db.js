const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const router = express.Router();


// Flast
const db = mysql.createConnection({
    port: process.env.PORT,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  db.connect((err) => {
      if(err) {
          throw err;
      }
      console.log('Conneted to the FLAST')
  });
  


  

module.exports = db;



