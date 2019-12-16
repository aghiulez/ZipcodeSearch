//import * as cities from "cities";


const InputController = async (orango, redis, body, response) => {

    const myZipcode = body.zipcode;
    //const myCity: string = cities.zip_lookup(myZipcode).city;
    response.send('The zipcode you searched for is in ' + body.zipcode);

    const InputModel = orango.model("Input");

    InputModel.add(myZipcode);

    

    
    
}

module.exports = {InputController};
