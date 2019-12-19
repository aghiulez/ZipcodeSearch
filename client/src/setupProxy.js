const proxy = require('http-proxy-middleware');
require('dotenv').config();  



module.exports = function(app) {
    app.use(
      '/result',
      proxy({
        target: process.env.SERVER_HOST,
        changeOrigin: true,
      })
    );
  };