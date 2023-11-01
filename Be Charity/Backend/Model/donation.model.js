const mongoose=require("mongoose");

const DonationSchema=mongoose.Schema({
    title:String,
    body:String,
    device:String,
   no_of_comments:Number,
   username:String,
  user_id:String
},{versionKey:false});

const DonationMOdel=mongoose.model("post",DonationSchema);

module.exports={
    DonationMOdel
}