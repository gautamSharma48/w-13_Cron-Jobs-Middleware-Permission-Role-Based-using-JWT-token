const express = require("express");
const router = express.Router();
const logJob = require("../jobs/logData");
const { verifyToken } = require("../middleware");
const { loginUser , createUser ,validateUser} = require("../controller");

// logJob.start();

router.get("/",verifyToken,validateUser);
router.get("/login",loginUser);
router.get("/sign-up",createUser);

module.exports = router;
