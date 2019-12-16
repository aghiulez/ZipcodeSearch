//import * as cities from "cities";
//import * as express from "express";
//import * as path from "path";

//import {InputController} from "../controllers/inputController"

const express = require("express");
const {InputController} = require("../controllers/inputController")


const Router = (orango, redis) => {
  const router = express.Router();
  router.use(express.urlencoded({extended: true}));
  

  
  router.get('/result', (req, res) => {
    const name = req.query.name || 'World';
    InputController(orango,redis,name,res);
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
    
  });
  
  // router.post('/result', (req,res) => {
  //   // const name = req.query.name || 'World';
  //   // res.setHeader('Content-Type', 'application/json');
  //   // res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  //   console.log(req.body);
  //   InputController(orango,redis,req.body,res);
  // })
  return router;
}
//export{Router}
module.exports = {Router}
