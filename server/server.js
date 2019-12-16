//import express from "express";
const express = require("express");
const {Router} = require("./routes/router")
//import {Router} from "./routes/router";
const {connectArangoDB} = require("./connectors/connectArango");
//import {connectArangoDB} from "./connectors/connectArango";
//import {connectRedisCache} from "./connectors/connectRedis";
 
//const PORT: number = 3001;
const PORT = 3001;

// USE REDIS AS MIDDLEWARE

//const start: any = async (port: number) => {
const start = async (port) => {
  try{
    
    //makes JavaScript wait until that promise settles
    const orangoInstance = await connectArangoDB();    // -> orango object
    //const redisInstance  = await connectRedisCache();  // -> redis object
    const redisInstance = orangoInstance;   // temp

    const server = express();

    server.use("/", Router(orangoInstance, redisInstance));

    server.listen(port, () => console.log(`🚀  Server Started on port: http://localhost:${PORT}`));

  }catch (serverError) {
    console.error({
      ErrorNotice: 'A major fuckup took place with server startup! ☠️',
      ErrorPayload: serverError,
    });
  }
}
start(PORT);

