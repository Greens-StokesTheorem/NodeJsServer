const express = require('express');
const app = express();
var events = require("events");
var http = require("http")
var eventemitter = new events.EventEmitter();


function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}



//  console logs out the url which have been requested
// app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");

// Route handling
// app.get('/', logger, (req, res) => {

//     res.render("summer", {number: 20, text: "world"} );

//     return res.end();

// });




app.get("/summer", (req, res) => {

    res.render("submit", {firstname: "placeholder"});

})




const userRoutter = require("./routes/users");
app.use("/users", userRoutter);




// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});



