const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const keys = require("../../loginDetails");
const MongoClient = require("mongodb").MongoClient;

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
var db;

 const dbURI = process.env.MONGODB_URI || require("../../loginDetails.js");
// const dbURI="http://localhost:27017";
//const dbURI = "mongodb+srv://AB:Abasiamaandjimmy1@cluster5-qqrwt.mongodb.net/DatabaseTest?retryWrites=true";

// Use connect method to connect to the server
MongoClient.connect(dbURI, function(err, client) {

  if (err) {
    console.error(err);
  } else {
    db = client.db("DatabaseTest");
  }
});
  //var err
  //if (err) {
    //console.error(err);
  //} else {

 // }
// Load User model
//const User = require("../../models/User");
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {  // FIXME: JB
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
if (!isValid) {
  return res.status(400).json(errors);
}
db.collection("CollectionTest").findOne({ email: req.body.email }).then(function(user) {
if (user) {
  return res.status(400).json({ email: "Email already exists" });
}
/*const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };*/
// Hash password before saving in database
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    if (err) throw err;
    console.log(req.body)
    let user = { name: req.body.name, email: req.body.email, password: hash};
    db.collection("CollectionTest").insert(user)
      .then(result => {req.session.user = user; res.json(result)})
      .catch(err => console.log(err));
  });
});
});
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
// Find user by email
  db.collection("CollectionTest").findOne({ email: email }).then(function(user) {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(function(isMatch) {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        req.session.user = user;
// Sign token
         /*jwt.sign(
           payload,
           keys.secretOrKey,
           {
             expiresIn: 31556926 // 1 year in seconds
           },
           (err, token) => {
             res.json({
               success: true,
               token: "Bearer " + token
             });
          }
         );*/
         res.json(payload);
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});




module.exports=router;
