const express=require("express");
const nodemailer=require("nodemailer")
const { PaymentModel } = require("../Model/payment.model");
const { DonationModel } = require("../Model/donation.model");
const { EMAIL, PASSWORD } = require("../env");

// const { auth } = require("../Middleware/auth.middleware");
const PaymentRouter=express.Router();
// PaymentRouter.use(auth)
//Post the Post
PaymentRouter.post("/add",async(req,res)=>{
 
    try {
     const Post=new PaymentModel(req.body);
     await Post.save();

     const UpdateDonationData=await DonationModel.findByIdAndUpdate({_id:req.body.donation_id},{current_funds:req.body.totalDonation})
    
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  });
  
  var mailOptions = {
 
      from: 'becharity6@gmail.com',
      to: req.body.email,
      subject: 'Thank You for Your Donation',
      text: `
        Dear ${req.body.Username},
    
        Thank you for your generous donation to our organization. Your support means a lot to us, and it will make a real difference in our mission.
    
        Donation Details:
        - Donation Name: ${req.body.Donation_name}
        - Amount: $${req.body.money}
        - Payment Type: ${req.body.payment_type}
        - Date: ${req.body.Time}
    
        We appreciate your contribution and commitment to our cause. Your support allows us to continue our work and make a positive impact in the community.
    
        If you have any questions or need further information, please don't hesitate to contact us.
    
        Thank you once again for your support. We look forward to your continued involvement in our charitable efforts.
    
        Sincerely,
        BeCharity Organization.
      `
    
  };
  
  transporter.sendMail(mailOptions, (error, info)=> { 
    if (error) {
      res.send({error : error,info})
    } else {
      return res.send({status : info})
}
});

    } catch (error) {
     res.status(400).send({msg:error})
    }
 })



//Get the Post With Queries
PaymentRouter.get("/",async(req,res)=>{
    try {
   //   let query={}
 
 
      const Payment=await PaymentModel.find(req.query);
      res.status(200).send(Payment);
   
       
        
   //       let limit=req.query.limit || 3;
   //       let skip=(req.query.page-1)*3 || 0;
   //       const totalPost=await PaymentModel.count(query);
   //       const totalPages = Math.ceil(totalPost / limit);
   //           const Post = await PaymentModel.find(query).skip(skip).limit(limit);
 
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