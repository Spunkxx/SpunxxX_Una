const express = require('express')
const user = express.Router();
const jwt = require('jsonwebtoken')
const checkAuth = require('../middleware/JwtAuth');



user.get('/user-info', checkAuth, async (req,res) =>{
    try{
        const userId = req.userData.userId;

        const user = await UserModel.findById(userId);

        if(user) {
            const userInfo = {
                name: user.name,
                email: user.email,
            }
            res.status(200).json(userInfo)
        }else{
            res.status(404).json({msg: "User not found!"})
        }
    }catch(error) {
        console.error(error);
        res.status(500).json({msg: "Internal Server Error"})
    }
})


module.exports = user;