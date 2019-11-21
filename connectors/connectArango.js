
const InputModel = require("../models/input"); 



async function connectArangoDB(orango) {  // async functions return promises!
  try {

    // Bind Model to orango instance
    InputModel(orango);
    const { EVENTS } = orango.consts

    orango.events.once(EVENTS.CONNECTED, conn => {
      console.log('🥑  Connected to ArangoDB:', conn.url + '/' + conn.name);
    });
    orango.events.once(EVENTS.READY, () => {
      console.log('🍊  Models loaded, Orango is all good to go!');
    });
    await orango.connect({
       url: 'http://localhost:8530',
       username: 'root', 
       password: '' 
    });
  } 
  catch (dbInitError){
    console.log(dbInitError);
  }
}

module.exports = connectArangoDB;