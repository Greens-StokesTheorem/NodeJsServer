const express = require("express");
const router = express.Router();
let users = [];



router.get("/", (req, res) => {

    console.log(req.query.name);
    res.send("<h2>Hello User list</h2>");

});

router.get("/new", (req, res) => {

    res.render("users/new", {firstname: "test"});

});

router.post("/", (req,res) => {

    const isValid = true;

    if (isValid) {
        users.push({ firstname: req.body.firstname});
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log("error")
        res.render("users/new", {firstname: `${req.body.firstname}`});
    }

    console.log(req.body.firstname);
    res.send("Create user")

});

router.route("/:id")
.get((req,res) => {

    console.log(req.user)
    res.send(`<h2>User id is ${req.params.id}</h2>`)}

).put((req,res) => {

    res.send(`<h2>Update id is ${req.params.id}</h2>`)}

).delete((req,res) => {

    res.send(`<h2>Delete User id is ${req.params.id}</h2>`)}

);


router.param("id", (req, res, next, id) => {

    req.user = users[id];
    console.log(id);
    next();

})



module.exports = router;