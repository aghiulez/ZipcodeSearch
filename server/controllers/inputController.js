//import * as cities from "cities";
const cities = require("cities");

const InputController = async (orango, redis, name, response) => {

    const myZipcode = name;
    console.log(myZipcode);
    const myCity = cities.zip_lookup(myZipcode).city;
    response.send(JSON.stringify({ greeting: `${myCity}!` }));

    const InputModel = orango.model("Input");

    InputModel.add(myZipcode);

    

    
    
}

module.exports = {InputController};
