const express = require('express');
const jwt = require('jsonwebtoken');


const router = express.Router();

const checkAuth = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token.' });
      }
  
      req.userId = decoded.userId;
      next();
    });
  };
  

 module.exports = router;