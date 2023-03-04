const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).json({ message: "Authorization header not found" });
  const authHeader=req.headers.authorization;
  const token = authHeader.split("Bearer ")[1];

  
  if (!token) return res.status(401).json({ message: "token not found" });

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    if (payload.role !== "admin") return res.status(401).json({ message: "Access Forbidden" });
    req.user = payload;
    next();
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  verifyToken,
};
