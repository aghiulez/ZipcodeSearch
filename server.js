const orango = require('orango');
const {createServer} = require('http');
const connectArangoDB = require("./connectors/connectArango");
const Router = require("./router");
const express = require('express');
const PORT = 3000;




async function connector(orango) {  
  return await connectArangoDB(orango); // await is only valid in async functions!
}

class ZipcodeSearchServer{
    constructor(orango){

        connector(orango);
        this.orango = orango;
        this.server = express(); //Init express?




    }
    start(port){
        try{
            // uncomment to connect to DB

          
          this.server.use("/", require('./router')(this.orango));
 


          this.server.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));

        }catch(serverError){
          console.error({
            ErrorNotice: 'A major fuckup took place with server startup! ☠️',
            ErrorPayload: serverError,
          });
        }
    };


      stop(){
        //this.server.close();
    };
    
};

const myServer = new ZipcodeSearchServer(orango.get("dev"));

// ----------------------------------------------------------


// ----------------------------------------------------------
myServer.start(3000);