const { users } = require("../db/database");
const { success, fail } = require("../response");

module.exports = {
  handleHome: (req, res) => {
    res.render("home");
  },
  handleLogin: (req, res) => {
    res.render("login");
  },
  handlePlay: (req, res) => {
    res.render("play");
  },
  handleUser: (req, res) => {
    const { email } = req.params;
    const user = users.find((u) => u.email);
    if (user) {
      success(res, user);
      return;
    }
    fail(res, `user ${email}not exist`);
  },
};
