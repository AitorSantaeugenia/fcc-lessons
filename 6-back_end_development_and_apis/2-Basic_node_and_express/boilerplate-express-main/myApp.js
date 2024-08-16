require('dotenv').config()

let express = require('express');
let app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

let message = 'Hello json';

app.get("/json", (req, res) => {
    if ( process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
        res.json({ "message": message });
    } else {
        console.log({ "message": message })
        res.json({ "message": message });
    }
});

console.log("Hello World");


































 module.exports = app;
