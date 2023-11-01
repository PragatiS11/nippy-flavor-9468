const express=require("express");
const { UserModel } = require("../Model/users.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { BlacklistModel } = require("../Model/blacklist.model");
const { auth } = require("../Middleware/auth.middleware");const UserRouter=express.Router();


//User Register
UserRouter.post("/register",async(req,res)=>{
   try {
    const alreadyPresent=await UserModel.findOne({email:req.body.email})
    if(alreadyPresent){
        res.status(200).send({msg:"User already exist, please login"})
    }else{
        bcrypt.hash(req.body.password, 2, async(err, hash)=>{
            if(err){
                res.status(200).send({msg:err})
            }else{
                const User=new UserModel({...req.body,password:hash});
                await User.save();
                res.status(200).send({msg:"User is registered.",Registerd_User:req.body})
           
            }
        });
  }
   } catch (error) {
    res.status(400).send({msg:error})
   }
})

//User Login
UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
     const User=await UserModel.findOne({email})
     if(!User){
         res.status(200).send({msg:"User is not exist, please register"})
     }else{
        bcrypt.compare(password, User.password,(err, result)=>{
            if(!err){
                let token = jwt.sign({ user_id:User._id ,username:User.name}, 'masai', { expiresIn: '7d' });
                res.status(200).send({msg:"User successfully logined.",token})
            }else{
                res.status(200).send({msg:"password is incorrect"})
            }
        });

   }
    } catch (error) {
        res.status(400).send({msg:error})
    }
 })

 //User Logout
UserRouter.get("/logout",async(req,res)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1];
        const Blacklist=new BlacklistModel({token});
        await Blacklist.save();
        res.status(200).send({msg:"Logged out Successfully."})
    } catch (error) {
        res.status(400).send({msg:error})
    }
    
})



module.exports={
    UserRouter
}