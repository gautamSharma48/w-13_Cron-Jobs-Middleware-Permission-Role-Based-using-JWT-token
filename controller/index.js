const fs = require("fs");


const logData = () => {
  const folderPath = "./upload/";
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const loggingData = `Logging Data at ${date + "-" + time} \n\n`;
  fs.appendFileSync(folderPath + "log.txt", loggingData);
};

const loginUser = (req, res) => {
  res.send("fs");
};

module.exports = {
  logData,
  loginUser,
};
