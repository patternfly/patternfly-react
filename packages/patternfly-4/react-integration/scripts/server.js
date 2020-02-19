const cypress = require('cypress');
const LocalWebServer = require('local-web-server');

const localWebServer = new LocalWebServer();
const server = localWebServer.listen({
  directory: './demo-app-ts/build',
  port: 3000,
  spa: 'index.html'
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
cypress.run().then(results => server.close());
