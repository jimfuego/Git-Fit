var express = require('express');
var router = express.Router();

/*
Basic connection function.
*/
function connect(callback) {
  //import mongo driver
  var MongoClient = require("mongodb").MongoClient;
  //default port for mongo
  var mdbUrl = "mongodb+srv://AB:Abasiamaandjimmy1@cluster5-qqrwt.mongodb.net/test?retryWrites=true";
  //var mdbUrl = "mongodb://localhost:27017";
  //create new MongoClient
  var client = new MongoClient(mdbUrl);

  //connect to client
  client.connect(function (err) {
    if (err !== null) throw err;
    //get database
    var db = client.db("dbName");
    //get collection
    var collection = db.collection("allUsers");
    //pass collection and client to operation and log success
    console.log("Connected!");
    callback(collection, client);
  });
}

/*
Provides necessary functionality for addUser API
// FIXME: send bac fail message if user exists
*/
function addUser(user, callback){
  //connect to db
  connect(function(collection, client) {
    //invoke insertOne mdb method
    collection.insertOne(user, function (err, res) {
      if (err !== null) throw err;
      console.log("User add success!");
      callback(res);
    });
  });
}

/*
API for posting new users to DB
*/
router.post("/createUser", function(req,res,next) {
  //add fields to new user instance
  addUser({
    userName: req.userName.text,
    weight: req.weight.text, // FIXME: should be int value
    height: req.height.text, // FIXME: should be int value
    age: req.age.text, // FIXME: should be int value
    cals: req.cals.text // FIXME: should be int value
  }, function (res) { // FIXME: this needs to be explained
    console.log("New user posted to DB");
    res.send(res);
  });
});

/*
Provides necessary functionality for updateUser API
*/
function updateUser(user, callback) {
  connect(function(collection, client) {
    collection.updateOne(user, function (err, res){
      if (err !== null) throw err;
      console.log("Update success!");
      callback(result);
    });
  });
}

/*
API for userUpdate functionality
*/
router.post("/updateUser", function(req,res,next) {
  updateUser(
    { "userName": req.userName.text },
    { $set: {"weight": req.weight.text ,
            "height": req.height.text ,
            "age": req.age.text ,
            "cals": req.cals.text }},
    function(res) {
      console.log("User" + req.username.text + "successfully updated!");
      res.send(res);
  });
})

/*
Provides functionality for getter APIs
*/
function getUserInfo(user, callback) {
  connect(function(collection, client) {
    collection.findOne(user, function(err, res) {
      if (err !== null) throw err;
      console.log("Got that user info boi!");
      callback(res);
    });
  });
}

/*
API for retrieving user profile data.
*/
router.get("/getUserInfo", function(req,res,next) {
  getUserInfo(
    { userName: req.userName.text },
    function(result) {
      console.log("Retrieving user info for " + req.userName.text);
      res.send(result);
    });
})

/*
API for getting user BMI
*/
router.post("/getBmi", function(req, res, next){
  getUserInfo(
    { userName: req.userName.text },
    { weight: 1, height: 1},
    function(result) {
      console.log("retrieving BMI for " + req.username.text);
      res.send(result.weight / result.height * result.height);
    }
  )
})

router.get("/dbTest", function(req,res,next) {
  console.log("DB Testing...");
  getFromDB(function(docs) {
    console.log("got from DB");
    res.send(docs);
  });
});

/* GET home page. */
router.get('/testRoute', function(req, res, next) {
  res.send("hello");
  // res.render('index', { title: 'Express' });
});

module.exports = router;
