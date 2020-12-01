const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

//

app.get("/", (req, res) => {
    res.render("home", {
        pageTitile: "homepage"
    });
});