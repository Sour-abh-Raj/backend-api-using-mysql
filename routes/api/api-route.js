const router = require("express").Router();
const { model } = require("../../config/connection");

const successMsg = "API route is working!";

router.get("/", (req, res) => {
  res.json({ message: successMsg });
});

module.exports = router;
