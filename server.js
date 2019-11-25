const orango = require('orango');
const {createServer} = require('http');
const connectArangoDB = require("./connectors/connectArango");
const Router = require("./router");
const express = require('express');
const PORT = 3000;


// await is only valid in async functions
async function connector(orango) {return await connectArangoDB(orango);} 


const start = (port) => {
  try{
    const orangoInstance = orango.get("dev");
    connector(orangoInstance);
    const server = express();

    server.use("/", require('./router')(this.orango));
    server.listen(port, () => console.log(`Server Started on port: ${PORT}`));

  }catch (serverError) {
    console.error({
      ErrorNotice: 'A major fuckup took place with server startup! ☠️',
      ErrorPayload: serverError,
    });
  }
}
console.log(process.env);
start(PORT);

