const express = require('express');
const app = express();
var events = require("events");
var fs = require("fs")
var eventemitter = new events.EventEmitter();

app.set("view engine", "ejs");
//  console logs out the url which have been requested
// app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));


// Route handling
app.get('/', logger, (req, res) => {

    res.render("summer", {number: 20, text: "world"} );

    return res.end();

});


const userRoutter = require("./routes/users");
app.use("/users", userRoutter);


function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}



// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});


