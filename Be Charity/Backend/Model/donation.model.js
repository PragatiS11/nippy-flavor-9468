const mongoose=require("mongoose");

const DonationSchema=mongoose.Schema({
    title:String,
    category:String,
description:String,
    goal: Number,
    image: String,
    current_funds: Number,
    beneficiary: Object,
    organizer: Object,
    budget_breakdown: Array,
    donators: Array,
    faq: Object,
    updates:Array 
},{versionKey:false});

const DonationModel=mongoose.model("donation",DonationSchema);

module.exports={
    DonationModel
}