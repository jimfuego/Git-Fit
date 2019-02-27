var express = require('express');
var router = express.Router();

/*
Basic connection function.
*/
function connect(callback) {
  //import mongo driver
  var MongoClient = require("mongodb").MongoClient;
  //default port for mongo
  // const dbURI = process.env.MONGODB_URI || require("loginDetails.js");
  // var mdbUrl = "mongodb://localhost:27017";
  //const mdbUrl = "mongodb+srv://AB:Abasiamaandjimmy1@cluster5-qqrwt.mongodb.net/DatabaseTest?retryWrites=true";
const dbURI = process.env.MONGODB_URI || require("../../loginDetails.js");
  //create new MongoClient
  const client = new MongoClient(dbURI);

  //connect to client
  client.connect(function (err) {
    if (err !== null) throw err;
    //get database
    var db = client.db("DatabaseTest");
    //get collection
    var collection = db.collection("CollectionTest");
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
router.post("/register", function(req,res,next) {
  //add fields to new user instance
  addUser({
    Name: req.body.Name,
    Email: req.body.Email,
    StartWeight: "",
    StartCals: "",
    CurrentWeight: "",
    Height: "",
    Age: "",
    CurrentCals: "",
  }, function (res) { // FIXME: this needs to be explained
    console.log("New user posted to DB");
    res.send(res);
  });
});

/*
Provides necessary functionality for updateUser API
*/
function updateUser(user,update,callback) {
  connect(function(collection, client) {
    collection.updateOne(user, update, function (err, res){
      if (err !== null) throw err;
      console.log("Update success!");
      callback(res);
    });
  });
}

/*
API for initialize user functionality
*/
router.post("/initUser", function(req,res,next) {
  if(req.session.user) {
    updateUser(
      { "name": req.session.user.name },
      { $set: {"StartWeight": req.body.Weight ,
               "Height": req.body.Height ,
               "Age": req.body.Age ,
               "StartCals": req.body.Avgcaloriesperday,
               "CurrentWeight": req.body.Weight ,
               "CurrentCals": req.body.Avgcaloriesperday }},
               function(result) {
                 console.log("User" + req.body.Name + "successfully updated!");
                 res.send(result);
               }
    );
  } else {
  throw err;
}
});

/*
API for userUpdate functionality
*/
router.post("/updateUser", function(req,res,next) {
  if(req.session.user) {
    updateUser(
      { "name": req.session.user.Name },
      { $set: {"CurrentWeight": req.body.CurrentWeight ,
               "CurrentCals": req.body.CurrentCals }},
               function(res) {
                 console.log("User" + req.session.user.Name + "successfully updated!");
                 res.send(res);
               }
    );
  } else {
  throw err;
}
});

/*
Provides functionality for getter APIs
*/
function getUserInfo(user, callback) {
  if(req.session.user) {
  connect(function(collection, client) {
    collection.findOne(user, function(err, res) {
      if (err !== null) throw err;
      console.log("Got that user info boi!");
      callback(res);
    });
  });
} else { throw err; }
}

/*
API for retrieving user profile data.
*/
router.get("/getUser", function(req,res,next) {
  getUserInfo(
    { Name: req.session.user.Name },
    function(result) {
      console.log("Retrieving user info for " + req.session.user.Name);
      res.send(result);
    }
  );
});

/*
Test APIs*/
router.get("/dbTest", function(req,res,next) {
  console.log("DB Testing...");
  getFromDB(function(docs) {
    console.log("got from DB");
    res.send(docs);
  });
});

/* Test message */
router.get('/testRoute', function(req, res, next) {
  res.send("hello");
  // res.render('index', { title: 'Express' });
});

module.exports = router;
