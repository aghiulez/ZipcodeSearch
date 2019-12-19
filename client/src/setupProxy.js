const proxy = require('http-proxy-middleware');
require('dotenv').config();  // how tf do i get the .env from parent dir....????!!!



module.exports = function(app) {
    app.use(
      '/result',
      proxy({
        target: process.env.SERVER_HOST,
        changeOrigin: true,
      })
    );
  };