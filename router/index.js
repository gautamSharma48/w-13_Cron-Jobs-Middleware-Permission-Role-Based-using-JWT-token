const express = require("express");
const router = express.Router();
const logJob = require("../jobs/logData");
const { verifyToken } = require("../middleware");
const { loginUser } = require("../controller");
logJob.start();

router.get("/",verifyToken);
router.get("/login",loginUser);

module.exports = router;
