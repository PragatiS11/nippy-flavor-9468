const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    city:String,
    image:String,
    isAdmin:Boolean,
    isVolunteers:Boolean
},{versionKey:false});


const UserModel=mongoose.model("user",UserSchema);

module.exports={
    UserModel
}