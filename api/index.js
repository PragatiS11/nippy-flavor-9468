const express=require("express");
const cors=require("cors");
const { UserRouter } = require("./Routes/users.routes");
const {  DonationRouter } = require("./Routes/donation.routes");
const { connection } = require("./db");
const { PaymentRouter } = require("./Routes/payment.routes");
const { UserModel } = require("./Model/users.model");

const app=express();
const multer=require("multer")
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send({message:"Welcome to the donation platform backend"});
})

app.use("/users",UserRouter)
app.use("/donation",DonationRouter)
app.use("/payment",PaymentRouter)
app.use(express.static("Imageappend"))

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Imageappend/Images")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})



  
 

app.listen(8000,async()=>{
    try {
        await connection;
        console.log("DB is connected")
        console.log("Server is running at 8000")
    } catch (error) {
        console.log(error);
    }
   
})