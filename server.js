const express = require("express");
const server = express();

const portNo = 3000;

//takes requests and directs them to public directory
server.use(express.static('./client/public/'));

server.listen(portNo, () => console.log("Git-Fit listening on", portNo));
// import config, { greeting } from './config';

//import file system utilities
// import fs from 'fs';

//import express and make server var
// import express from 'express';
// const server = express();

//greetings, Earthlings
// greeting("Fitness App Server\nAkpan/Borzillieri");

//takes requests and directs them to public directory
// server.use(express.static('./client/public/'));

// requests w/ fs
// server.get('/client/public/url', (req,res) => {
//   fs.readFile('/client/public/index.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

//tell server to listen for requests; display port
// server.listen(config.port, () => {
//   console.info("Express listening on port ", config.port);
// });
