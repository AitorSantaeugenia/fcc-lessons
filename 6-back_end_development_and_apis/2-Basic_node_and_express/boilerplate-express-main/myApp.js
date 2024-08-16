require('dotenv').config()

const bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
	let string = req.method + " " + req.path + " - " + req.ip;
	console.log(string);
	next();
});
app.use("/public", express.static(__dirname + "/public"));

let message = 'Hello json';

app.get("/json", (req, res) => {
    if ( process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
        res.json({ "message": message });
    } else {
        res.json({ "message": message });
    }
});

const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
};

app.get("/now", middleware, (req, res) => {
    res.send({
        time: req.time
    });
});

app.get("/:word/echo", (req, res) => {
    const { word } = req.params;

    res.json({
        echo: word
    });
});

app.get("/name", (req, res) => {
    const { first: firstName, last: lastName } = req.query;

    res.json({ 
        name: `${firstName} ${lastName}`
    });
});

app.post("/name", (req, res) => {
    res.json({ name:req.body.first + " " + req.body.last})
});

console.log("Hello World");


































 module.exports = app;
