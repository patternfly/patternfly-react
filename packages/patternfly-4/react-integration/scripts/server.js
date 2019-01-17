const cypress = require('cypress');
const LocalWebServer = require('local-web-server');

const localWebServer = new LocalWebServer();
const server = localWebServer.listen({
  port: 3000,
  directory: './demo-app-ts/build',
  spa: 'index.html'
});
cypress.run().then(results => server.close());
