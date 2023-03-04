const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, default: "" , required: "email must be required" },
  password: { type: String, default: "" , required: "password must be required" },
  role: { type: String, default: "" },
  
});

module.exports=mongoose.model("ml-user",userSchema);