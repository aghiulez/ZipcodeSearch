import * as cities from "cities";
import * as express from "express";
import * as path from "path";

import {InputController} from "../controllers/inputController"

const Router = (orango: any) => {
  const router = express.Router();
  router.use(express.urlencoded({extended: true}));
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
export{Router}

