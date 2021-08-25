const express = require("express");
const { fail } = require("../response");
const { users } = require("../db/database");
const { handleUser } = require("../handler/handler");

const router = express.Router();

const checkLoginMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  const obj = users.find((u) => u.email === email);
  if (obj) {
    if (obj.password === password) {
      next();
    } else {
      fail(res, "wrong password!");
    }
    return;
  }
  fail(res, "user not found");
};

router.get("/", (req, res) => {
  success(res, "API");
});

router.post("/login", checkLoginMiddleware, (req, res) => {
  res.redirect("/play");
});
router.get("/user/:email", handleUser);
module.exports = router;
