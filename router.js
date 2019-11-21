const cities = require("cities");
const {parse} = require("url");
const InputController = require("./controllers/inputController");


class Router {
  constructor() {
    this.routes = [];
  }
  //A router object allows new handlers to be registered with the add method
  add(method, url, handler) {
    this.routes.push({method, url, handler});
  }
  //A router object can resolve requests with its resolve method.
  // context -> server instance 
  resolve(context, request) {  // Resolve : resolve the current request 
    let path = parse(request.url).path;
    for (let {method, url, handler} of this.routes) {
      let match = url.exec(path);
      if (!match || request.method != method) continue; // if the path is not a match or the request method is not valid, skip this iteration
      let urlParts = match.slice(1).map(decodeURIComponent);
      return handler(context, ...urlParts, InputController, request); // -> a promise... return of the add
    }
    return null;
  }
};


// Here, we create a Router object --- passing in new handler methods with the add method 
// -------------------------------------------------------------------------------------------------
const myRouter = new Router();

myRouter.add("GET", /^\/\?zipcode=(\d\d\d\d\d)$/, async (myServer, urlParts, controller, request) => {
  if (cities.zip_lookup(urlParts) != null){
    controller(myServer.orango, urlParts);
    return {body: 'The zipcode you searched for is in ' + cities.zip_lookup(urlParts).city,
            headers: {"Content-Type": "text/plain"}};
  }
  else{
    return {body: 'The zipcode you searched for does not exist',
            headers: {"Content-Type": "text/plain"}};
  }
});

module.exports = myRouter;