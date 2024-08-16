require('dotenv').config()

let express = require('express');
let app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

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

app.use(function middleware(req, res, next) {
    // Do something
    // Call the next function in line:
    next();
});

console.log("Hello World");


































 module.exports = app;
