import * as cities from "cities";
//const cities = require("cities");

const InputController = async (orango, redis, name, response) => {

    const myZipcode = name || null;
    //console.log("zipcode: " + myZipcode);

    if (myZipcode != null ){

        try{
            const myCity = cities.zip_lookup(myZipcode).city;
            response.send(JSON.stringify({ city: `${myCity}!` }));
        
            const InputModel = orango.model("Input");
            InputModel.add(myZipcode);
        
        }
        catch(error){
            response.send(JSON.stringify({ city: "Not a proper zipcode..." }));
            console.log("Error: not a proper zipcode input")
        }

    }

    

    

    
    
}

module.exports = {InputController};
