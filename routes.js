const express = require('express');
const router = express.Router();

//router.get("/", function(req,res){
  //  res.render("home/");
//});

router.get("/", function(req,res){
    res.render("home/home");
});
router.get("/home", function (req, res) {
    res.render("home/home")
 });

router.get("/solid", function (req, res) {
    res.render("home/solid")
 });
 router.get("/water", function (req, res) {
  res.render("home/water")
});
router.get("/energy", function (req, res) {
  res.render("home/energy")
});


module.exports = router;