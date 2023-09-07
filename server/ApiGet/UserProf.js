const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const JwtAuth = require('../middleware/JwtAuth');



router.get('/user', JwtAuth, async (req,res) =>{
    try{
        const userId = req.userData.userId;

        const user = await UserModel.findById(userId);

        if(user) {
            const userInfo = {
                name: userData.name,
                email: userData.email,
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


module.exports = router;