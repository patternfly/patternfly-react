const LocalWebServer = require('local-web-server');

const localWebServer = new LocalWebServer();
localWebServer.listen({
  directory: './public',
  port: 3000,
  spa: 'index.html'
});
