const mongoose=require("mongoose");

const PaymentSchema=mongoose.Schema({
 user_id:String,
 money:Number,
 donation_id:String,
 Username:String,
 Donation_name:String,
 Time:String,
 payment_type:String,
 payment_detail:Array,
 totalDonation:Number,
 email:String
},{versionKey:false});

const PaymentModel=mongoose.model("payment",PaymentSchema);

module.exports={
  PaymentModel
}