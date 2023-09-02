const express = require("express");
const cors = require ("cors" );
const env = require('dotenv');
// const mysql = require('mysql');
// const jwt = require('jsonwebtoken');
const cookParser = require('cookie-parser');
const RefreshTok = require('./middleware/RefreshTok');
// const bcrypt = require('bcrypt');
// const salt = 10;
const app = express();
app.use(express.json());



// ambot sakto baka cors ka animal 

app.use(cors({
  origin: "http://localhost:5173",
  credentials: false,
}));
env.config();


//diri nimo gi import ang routes/endpoints nimo

// const db = require('./DataBase/db');
app.use('/', RefreshTok);
const RegisterApi = require('./ApiRoutes/RegisterApi');
app.use('/',RegisterApi);
const LoginApi = require('./ApiRoutes/LoginApi');
app.use('/',LoginApi);
const Logout = require('./ApiRoutes/Logout');
app.use('/',Logout);



//register Api

// app.post('/register', async (req,res) => {

//     try {
//      const{ name, email, password} = req.body;
  
//       const hashedPassword = await bcrypt.hash(password, 10);

//       const sql = "SELECT * FROM users WHERE email = ?";
//       const sql_insert = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

//       db.query(sql, [email, hashedPassword], (err,result) =>{
//         if(result[0]){
//           return res.status(400).send({message: 'Email Already in use'});
//         }else {
//           db.query(sql_insert, [name ,email, hashedPassword], (err, result) => {
//             if (err) {
//               console.log(err)
//             }else {
//               res.send(result);
//             }
//           })
//         }
//       })
//     } catch {
//       res.status(500).send();     
//     }
// })


// // login Api

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
//     if (err) {
//       console.error('Error during login:', err);
//       return res.status(500).json({ message: 'Error during login' });
//     }

//     if (results.length === 0) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const user = results[0];
//     console.log('Database Query Results:', results);

//     console.log('user.Password:', user.Password); 
//     console.log('Password:', password);

   
//       bcrypt.compare(password, user.Password, (compareErr, isMatch) => {
//       if (compareErr) {
//         console.error('Error comparing passwords:', compareErr);
//         return res.status(500).json({ message: 'Error during login' });
//       }

//       if (isMatch) {
        
//         return res.status(200).json({ message: 'Login successful' });
//       } else {
        
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//     });
//   });
// });

// const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// })

// db.connect((err) => {
//   if(err) {
//       throw err;
//   }
//   console.log('Conneted to the DataBase')
// });



const PORT = process.env.PORT_API || 5181;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
