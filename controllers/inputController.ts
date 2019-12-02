import * as cities from "cities";

const InputController: any = async (orango: any, redis: any, body:any, response: any) => {

    const myZipcode: any = body.zipcode;
    const myCity: string = cities.zip_lookup(myZipcode).city;
    response.send('The zipcode you searched for is in ' + body.zipcode);

    const InputModel:any = orango.model("Input");

    InputModel.add(myZipcode);

    

    
    
}

export{InputController};
