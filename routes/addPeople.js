var express = require('express');
var router = express.Router();
var path = require('path');
var dataPath = require('../utils/globalDatabase');
var fs = require("fs");

/* GET users listing. */
router.post('/', function (req, res, next) {
  let data = fs.readFileSync(dataPath);
    const newPerson = req.body;
    // Converting to JSON 
    const people = JSON.parse(data);
    people.push(newPerson);
    console.log(people); // Print users 
    fs.writeFileSync(dataPath, JSON.stringify(people));
    res.send("200");
});



module.exports = router;
