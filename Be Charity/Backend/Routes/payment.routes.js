const express=require("express");
const { PaymentModel } = require("../Model/donation.model");
// const { auth } = require("../Middleware/auth.middleware");
const PaymentRouter=express.Router();
// PaymentRouter.use(auth)
//Post the Post
PaymentRouter.post("/add",async(req,res)=>{
    try {
     const Post=new PaymentModel(req.body);
     await Post.save();
     res.status(200).send({msg:"Post is added.",Added_Post:req.body});
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })



//Get the Post With Queries
PaymentRouter.get("",async(req,res)=>{
    try {
   //   let query={}
 
   
       
        
   //       let limit=req.query.limit || 3;
   //       let skip=(req.query.page-1)*3 || 0;
   //       const totalPost=await PaymentModel.count(query);
   //       const totalPages = Math.ceil(totalPost / limit);
   //           const Post = await PaymentModel.find(query).skip(skip).limit(limit);
   const Payment=await PaymentModel.find();
     res.status(200).send(Payment);
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })

 //Get Single Data
 PaymentRouter.get("/:id",async(req,res)=>{
   let {id}=req.params;
   try {
  const Payment=await PaymentModel.findOne({_id:id});
    res.status(200).send(Payment);
   } catch (error) {
    res.status(400).send({msg:error})
   }
})

//Patch the post
PaymentRouter.patch("/update/:id",async(req,res)=>{
    let {id}=req.params;
    try {
     const Post=await PaymentModel.findByIdAndUpdate({_id:id},req.body);
     res.status(200).send({msg:"Post is updated."});
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })

 //Delete the post
PaymentRouter.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params;
    try {
     const Post=await PaymentModel.findByIdAndDelete({_id:id});
     res.status(200).send({msg:"Post is deleted."});
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })

module.exports={
   PaymentRouter
}