const fs = require("fs");
const UserSchema = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const logData = () => {
  const folderPath = "./upload/";
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const loggingData = `Logging Data at ${date + "-" + time} \n\n`;
  fs.appendFileSync(folderPath + "log.txt", loggingData);
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const findUser=await UserSchema.findOne({email:email});
  if(findUser) return res.status(400).json({msg:"user already registered ..sign in"})
  const user = new UserSchema({
    name: name,
    email: email,
    password: password,
    role: role,
  });
  const result = await user.save();
  if (!result) return res.status(500).json({ msg: "server error" });
  res.status(200).json(result);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserSchema.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: "please sign up" });
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  res.setHeader("Authorization", `Bearer ${token}`).status(200).json({
    id: user._id,
    token: token,
  });
  res.status(200).json(user);
};

const validateUser = (req, res) => {
  res.send(req.user);
};
module.exports = {
  logData,
  loginUser,
  createUser,
  validateUser
};
