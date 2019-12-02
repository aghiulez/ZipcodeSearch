import {InputModel} from "../models/input";
import orango from "orango";

const { EVENTS } = orango.consts;

async function connectArangoDB() {  // async functions return promises!
  try {

    const orangoInstance = orango.get("dev");

    // Bind Model to orango instance
    InputModel(orangoInstance);

    

    orangoInstance.events.once(EVENTS.CONNECTED, conn => {
      console.log('🥑  Connected to ArangoDB:', conn.url + '/_db/' + conn.name);
    });
    orangoInstance.events.once(EVENTS.READY, () => {
      console.log('🍊  Models loaded, Orango is all good to go!');
    });
    await orangoInstance.connect({
       url: 'http://localhost:8530',
       username: 'root', 
       password: '' 
    });
    return orangoInstance;
    
  } 
  catch (dbInitError){
    console.log(dbInitError);
  }
}

export{connectArangoDB};
