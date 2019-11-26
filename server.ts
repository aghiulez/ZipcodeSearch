
import orango from "orango";
import express from "express";


import {Router} from "./routes/router";
import {connectArangoDB} from "./connectors/connectArango";

const PORT: number = 3000;


// await is only valid in async functions
async function connector(orango: any) {return await connectArangoDB(orango);} 


const start: any = (port: number) => {
  try{
    const orangoInstance = orango.get("dev");
    connector(orangoInstance);
    const server = express();

    server.use("/", Router(orangoInstance));
    server.listen(port, () => console.log(`Server Started on port: ${PORT}`));

  }catch (serverError) {
    console.error({
      ErrorNotice: 'A major fuckup took place with server startup! ☠️',
      ErrorPayload: serverError,
    });
  }
}
start(PORT);

