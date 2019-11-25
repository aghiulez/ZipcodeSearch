const cities = require("cities");
const {parse} = require("url");
const InputController = require("./controllers/inputController");
const express = require('express');


module.exports = orango => {
  const router = express.Router();

  router.use(express.urlencoded());
  router.use(express.json());
  

  router.get('/', (request,response) => {
    try{
      response.write(`<h1>If you would like to know what city a zipcode belongs to, </h1>`);
      response.write(`<h1>query: /?zipcode=<ZIPCODE>    -- to the URL (GET)</h1>`); 
      response.write('<form class="example" method="post" >');
      response.write('  <input type="text" id = "zipcode" placeholder="Search Zipcode" name="zipcode">');
      response.write('  <button type="submit"><i class="fa fa-search"></i></button>');
      response.write('</form>');
      response.end();
    }catch(error){
      console.log(error);
    }
  })



  router.post('/', (request,response) => {
    console.log(request.body.zipcode);

    InputController(orango,request.body.zipcode);
    response.send('The zipcode you searched for is in ' + cities.zip_lookup(request.body.zipcode).city)
   
  })



  return router;
}


