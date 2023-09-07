const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config();

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
  

//  Una
  // const db2 = mysql.createConnection({
  //   port: process.env.PORT_UNA,
  //   host: process.env.HOST_UNA,
  //   user: process.env.USER_UNA,
  //   password: process.env.PASSWORD_UNA,
  //   database: process.env.DATABASE_UNA,
  // });
  // db2.connect((err) => {
  //     if(err) {
  //         throw err;
  //     }
  //     console.log('Conneted to the UNA')
  // });
  

// module.exports = {db,dbUna};
module.exports = db;



