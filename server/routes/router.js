//import * as cities from "cities";
//import * as express from "express";
//import * as path from "path";

//import {InputController} from "../controllers/inputController"

const express = require("express");
const {InputController} = require("../controllers/inputController")


const Router = (orango, redis) => {
  const router = express.Router();
  router.use(express.urlencoded({extended: true}));
  
  router.get('/', (request,response) => {
    try{
      console.log("hello1")
      //response.sendFile(path.join(__dirname,'../pages','index.html'));
      
    }catch(error){
      console.log(error);
    }
  })
  
  router.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  });
  
  router.post('/', (request,response) => {
    console.log("hello")
    InputController(orango,redis,request.body,response);
  })
  return router;
}
//export{Router}
module.exports = {Router}
