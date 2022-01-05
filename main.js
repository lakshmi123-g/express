
const port = 3005;
var http = require('http');
const express = require("express"),
    app = express();
var tmp = 0;
app.set("view engine", "ejs");

const layouts = require("express-ejs-layouts");

app.use(layouts);
/*app.get("/", (req, res) => {
    res.render("index");
})*/

app.use(express.static('public'));
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
})
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
})
const homeController = require("./controllers/homeController");


app.listen(port, () => {
    console.log(`The Express.js server has started and is listening
        on port number: ${port}`);
});