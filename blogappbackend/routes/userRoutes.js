const express = require('express');

const router = express.Router();

router.use(express.json());

const userModel = require("../model/userData");

const jwt = require('jsonwebtoken');//import jsonwebtoken


router.post('/login', async(req,res)=>{
   
        const user = await userModel.findOne({userEmail:req.body.userEmail})// the given email and db email is checked  and all data(whole docment save to this user)
        // console.log(user)
        if(!user){
            res.status(404).send({message:'User not found'})
        }
        try {
            if (user.userPassword == req.body.userPassword) {
              // generating token when the pass and email is matched
              // blogApp - key (use any key )
              // payload is the email and password
              const payload = {
                userEmail: user.userEmail,
                userPassword: user.userPassword,
              };
              const token = jwt.sign(payload, "blogApp");

              //that fetched user password is checked with the given pass
              //sending this token to the frontend
              res.status(200).send({ message: "Login Successful",token:token });
            }          
        } catch (error) {
            console.log(error);           
        }              
})


module.exports = router;