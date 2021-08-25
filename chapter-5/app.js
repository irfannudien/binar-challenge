const express = require("express");
const app = express();
const morgan = require("morgan");
const compression = require("compression");
const path = require("path");
const { handleHome, handleLogin, handlePlay } = require("./handler/handler");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(compression());

const home = require("./router/home");
const api = require("./router/api");

app.use("/home", home);
app.use("/api", api);

app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/play", handlePlay);
app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(8000);

console.log("Server is running at port 8000");
