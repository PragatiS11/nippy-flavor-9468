const { BlacklistModel } = require("../Model/blacklist.model");
const jwt=require("jsonwebtoken");
const auth=async(req,res,next)=>{
   
    try {
        const token=req.headers.authorization?.split(" ")[1];

        if(token){
            const Blacklist=await BlacklistModel.findOne({token});
            if(Blacklist){
                res.status(200).send({msg:"Login Again!"})
            }else{
                let decoded = jwt.verify(token, 'masai');
                if(decoded){
                    req.body.user_id=decoded.user_id;
                    req.body.organizer=decoded.user_id;
        
                    next();
                }else{
                    return res.status(200).send({msg:'UnAuthorized'})
                }
              
               
            }
        }else{
            res.status(200).send({msg:"Login Again!"})
        }
     
    
    } catch (error) {
        res.status(400).send({msg:error})
    }
}

module.exports={auth}