//import config file
import config, { greeting } from './config';

//import express and make server var
import express from 'express';
const server = express();

//greetings, Earthlings
greeting("Fitness App Server\nAkpan/Borzillieri");

//takes requests and directs them to public directory
server.use(express.static('public'));

//
server.listen(config.port, () => {
  console.info("Express listening on port ", config.port);
})
