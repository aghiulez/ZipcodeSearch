import express from "express";


import {Router} from "./routes/router";
import {connectArangoDB} from "./connectors/connectArango";
import {connectRedisCache} from "./connectors/connectRedis";
 
const PORT: number = 3000;


// USE REDIS AS MIDDLEWARE

const start: any = async (port: number) => {
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

