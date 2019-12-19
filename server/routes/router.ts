
const {InputController} = require("../controllers/inputController")
const express = require("express");

const Router = (orango, redis) => {
  const router = express.Router();
  router.use(express.urlencoded({extended: true}));
  

  
  router.get('/result', (req, res) => {
    const zip = req.query.zip || null;
    InputController(orango,redis,zip,res);
  });
  
  // router.post('/result', (req,res) => {
  //   // const name = req.query.name || 'World';
  //   // res.setHeader('Content-Type', 'application/json');
  //   // res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  //   console.log(req.body);
  //   InputController(orango,redis,req.body,res);
  // })
  return router;
}
//export{Router}
module.exports = {Router}
