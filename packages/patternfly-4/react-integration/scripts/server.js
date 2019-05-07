const cypress = require('cypress');
const LocalWebServer = require('local-web-server');

const localWebServer = new LocalWebServer();
const server = localWebServer.listen({
  directory: './demo-app-ts/build',
  port: 3000,
  spa: 'index.html'
});
cypress.run().then(results => server.close());
