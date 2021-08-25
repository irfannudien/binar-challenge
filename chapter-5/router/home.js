const express = require("express");
const { success } = require("../response");

const router = express.Router();

router.get("/", (req, res) => {
  success(res, "Home");
});

module.exports = router;
