import express from "express";

const {Router} = require("./routes/router")

const {connectArangoDB} = require("./connectors/connectArango");

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

