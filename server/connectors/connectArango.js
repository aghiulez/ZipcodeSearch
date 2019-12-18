//import {InputModel} from "../models/input";
//import orango from "orango";

const {InputModel} = require("../models/input");
const orango = require("orango")

require('dotenv').config();

const { EVENTS } = orango.consts;



async function connectArangoDB() {  // async functions return promises!
  try {

    const orangoInstance = orango.get("dev");
    // Bind Model to orango instance
    InputModel(orangoInstance);

    

    orangoInstance.events.once(EVENTS.CONNECTED, conn => {
      console.log('🥑  Connected to ArangoDB:', conn.url + '_db/' + conn.name);
    });
    orangoInstance.events.once(EVENTS.READY, () => {
      console.log('🍊  Models loaded, Orango is all good to go!');
    });
    await orangoInstance.connect({
      url: process.env.DB_HOST,
      username: 'root', 
      password: '' 
    });

    return orangoInstance;
    
  } 
  catch (dbInitError){
    console.log(process.env.DB_HOST)
    console.log(dbInitError);
  }
}

module.exports = {connectArangoDB};
