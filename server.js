const express = require("express");
const server = express();

const portNo = 3000;

//takes requests and directs them to public directory
server.use(express.static('./client/public/'));

server.listen(portNo, () => console.log("Git-Fit listening on", portNo));

