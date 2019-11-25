const cities = require("cities");
const {parse} = require("url");
const InputController = require("./controllers/inputController");
const express = require('express');
const path = require("path");


module.exports = orango => {
  const router = express.Router();

  router.use(express.urlencoded());
  router.use(express.json());

  router.get('/', (request,response) => {
    try{
      response.sendFile(path.join(__dirname,'pages','index.html'));
    }catch(error){
      console.log(error);
    }
  })
  router.post('/', (request,response) => {
    InputController(orango,request.body.zipcode);
    response.send('The zipcode you searched for is in ' + cities.zip_lookup(request.body.zipcode).city)
   
  })
  return router;
}


