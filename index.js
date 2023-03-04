const express=require("express");
const router=require("./router")
const mongoose=require("mongoose")
require("dotenv").config();

const app=express();
const port=process.env.PORT || 8080;

app.use(express.json())
app.use("/",router);

//db 
const connectDb=()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected with db")).catch(err=>console.log(err))
}

app.listen(port,()=>{
    connectDb();
    console.log(`server listening with ${port}`)
})