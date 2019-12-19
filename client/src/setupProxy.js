const proxy = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(
      '/result',
      proxy({
        target: 'http://server:3001/',
        changeOrigin: true,
      })
    );
  };