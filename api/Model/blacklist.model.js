const mongoose=require("mongoose");

const BlacklistSchema=mongoose.Schema({
  token:String
},{versionKey:false});

const BlacklistModel=mongoose.model("blacklist",BlacklistSchema);

module.exports={
    BlacklistModel
}