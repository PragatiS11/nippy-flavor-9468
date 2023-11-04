const mongoose=require("mongoose");

const PaymentSchema=mongoose.Schema({
    title:String,
 user_id:String,
 money:Number,
 donation_id:String,
 Username:String,
 Donation_name:String,
 Time:String
},{versionKey:false});

const PaymentModel=mongoose.model("payment",PaymentSchema);

module.exports={
  PaymentModel
}