# ZipcodeSearch

Simple web application that optimizes the use of Typescript, Docker, and ArangoDB

  

### Run all services through docker containers

  

> Docker-compose up -d
> 

 - **API** 
 Docker Network : http://server:3001/
 Local Network:      http://localhost:3001/
 
  - **CLIENT** 
 Docker Network : http://client:3000/
 Local Network:      http://localhost:3000/
 
 - **DB**
 Docker Network : http://arangodb-local:8529/
 Local Network:     http://localhost:8529/
	

  

### Run API and Client locally

Run server -> localhost:3001

> npm run dev

Run client -> localhost:3000

> npm run start