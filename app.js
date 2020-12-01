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

app.get("/about", (req, res) => {
    res.render("about", {
        pageTitile: "about"
    });
});

app.listen(3000, () => {
    console.log("sever is ready ! http://localhost:3000");
})