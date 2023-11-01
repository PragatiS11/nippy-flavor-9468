const express=require("express");
const { DonationModel } = require("../Model/donation.model");
const { auth } = require("../Middleware/auth.middleware");
const DonationRouter=express.Router();
DonationRouter.use(auth)
//Post the Post
DonationRouter.post("/add",async(req,res)=>{
    try {
     const Post=new DonationModel(req.body);
     await Post.save();
     res.status(200).send({msg:"Post is added.",Added_Post:req.body});
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })

// Get The Post In Top
DonationRouter.get("/top",async(req,res)=>{
   try {
        let limit=req.query.limit || 3;
        let skip=(req.query.page-1)*3 || 0;
        const totalPost=await DonationModel.count(query);
        const totalPages = Math.ceil(totalPost / limit);
    const Post=await DonationModel.find({}).sort({"no_of_comments":-1}).skip(skip).limit(limit)
    res.status(200).send({Post,totalPost,totalPages});
   } catch (error) {
    res.status(400).send({msg:error})
   }
})

//Get the Post With Queries
DonationRouter.get("",async(req,res)=>{
    try {
     let query={}
 
         if(req.query.device){
 query.device=req.query.device;
         }
         if(req.query.lte && req.query.gte){
            query['no_of_comments']={$gte : req.query.gte, $lte : req.query.lte}
         }

        
         let limit=req.query.limit || 3;
         let skip=(req.query.page-1)*3 || 0;
         const totalPost=await DonationModel.count(query);
         const totalPages = Math.ceil(totalPost / limit);
             const Post = await DonationModel.find(query).skip(skip).limit(limit);
     res.status(200).send({Post,totalPost,totalPages});
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })

//Patch the post
DonationRouter.patch("/update/:id",async(req,res)=>{
    let {id}=req.params;
    try {
     const Post=await DonationModel.findByIdAndUpdate({_id:id},req.body);
     res.status(200).send({msg:"Post is updated."});
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })

 //Delete the post
DonationRouter.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params;
    try {
     const Post=await DonationModel.findByIdAndDelete({_id:id});
     res.status(200).send({msg:"Post is deleted."});
    } catch (error) {
     res.status(400).send({msg:error})
    }
 })

module.exports={
   DonationRouter
}