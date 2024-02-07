var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Store the dynamic data
let dynamicData = "";

// Function to update dynamic data every 5 minutes
function updateDynamicData() {
  // Replace this with your logic to generate dynamic data
  dynamicData = `Dynamic data updated at ${new Date().toLocaleTimeString()}`;
  console.log("Dynamic data updated:", dynamicData);
}

// Update dynamic data initially
updateDynamicData();

// Update dynamic data every 5 minutes
setInterval(updateDynamicData, 5 * 60 * 1000);

/* GET users listing. */
router.get("/dynamic", function (req, res, next) {
  res.send(`Dynamic data: ${dynamicData}`);
});

module.exports = router;
