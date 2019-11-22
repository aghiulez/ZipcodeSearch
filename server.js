const orango = require('orango');
const {createServer} = require('http');
const connectArangoDB = require("./connectors/connectArango");
const Router = require("./router");



async function connector(orango) {  
  return await connectArangoDB(orango); // await is only valid in async functions!
}

class ZipcodeSearchServer{
    constructor(orango){

        connector(orango);
        this.orango = orango;
        this.server = createServer((request, response) => {
            
            let resolved = Router.resolve(this, request);
            console.log(request.method);

            if (resolved) {
              resolved.catch(error => {
                if (error.status != null) return error;
                return {body: String(error), status: 500};
              }).then(({body,
                        status = 200,
                        headers = {"Content-Type": "text/plain"}}) => {
                response.writeHead(status, headers);
                response.end(body);
              });
          
            } else {  
              response.write(`<h1>If you would like to know what city a zipcode belongs to, </h1>`);
              response.write(`<h1>query: /?zipcode=<ZIPCODE>    -- to the URL (for get method)</h1>`);
              //response.write('<form class="example" method="post" action="action_page.html">');
              response.write('<form class="example" method="post" >');
              response.write('  <input type="text" placeholder="Search Zipcode" name="zipcode">');
              response.write('  <button type="submit"><i class="fa fa-search"></i></button>');
              response.write('</form>');
            }
          });
        }
    start(port){
        this.server.listen(port);
    }
      stop(){
        this.server.close();
    }
    
}

const myOrango = orango.get("dev"); // orango instance with the instance name "dev" (later looks for DB titled "dev within arango")
const myServer = new ZipcodeSearchServer(myOrango);

// ----------------------------------------------------------


// ----------------------------------------------------------
myServer.start(3000);