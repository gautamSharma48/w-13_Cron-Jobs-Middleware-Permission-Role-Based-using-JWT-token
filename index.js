const express=require("express");
const router=require("./router")
require("dotenv").config();

const app=express();
const port=process.env.PORT || 8080;

app.use(express.json())
app.use("/",router);


app.listen(port,()=>{
    console.log(`server listening with ${port}`)
})