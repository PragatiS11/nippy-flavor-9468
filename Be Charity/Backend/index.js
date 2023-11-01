const express=require("express");
const cors=require("cors");
const { UserRouter } = require("./Routes/users.routes");
const { PostRouter } = require("./Routes/donation.routes");
const { connection } = require("./db");
const app=express();

app.use(express.json());
app.use(cors());

app.use("/users",UserRouter)
app.use("/donation",PostRouter)

app.listen(3000,async()=>{
    try {
        await connection;
        console.log("DB is connected")
        console.log("Server is running at 3000")
    } catch (error) {
        console.log(error);
    }
   
})