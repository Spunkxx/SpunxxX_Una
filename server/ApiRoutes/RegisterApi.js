const express = require('express');
const router = express.Router();
const db = require('../DataBase/db')
const bcrypt = require('bcrypt');
const salt = 10;

router.post('/register', async (req,res) => {
    const { name, email, password} = req.body;

    try {
      
      const hashedPassword = await bcrypt.hash(password, salt);
      const newValue = {
        name,email,hashedPassword
      };
      
      db.query('INSERT INTO accounts (name, email, password) VALUES (?, ?, ?)',
      [newValue.name, newValue.email, newValue.hashedPassword],
      (err, result) => {

        if(err) {
          console.error('Error Registering user:', err);
          res.status(500).json({message: 'Registration Failed!'})
        }else{
          console.log('User is Registered Successfully!');
          res.json({message: 'Registration Success!'})
        }
      })
    } catch (err) {
      console.err('Error Hashing password:', err)
      res.status(500).json({message: 'Registration Failed!'}) 
    }
  })



module.exports = router;


