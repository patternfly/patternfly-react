const fs = require('fs');
const path = require('path');

const WORKER_NUM = +process.env['WORKER_NUM'];
const WORKER_COUNT = +process.env['WORKER_COUNT'];

const testFiles = fs.readdirSync(path.join(__dirname, '../packages/react-integration/cypress/integration'))
  .sort()
  .filter((_, i) => i % WORKER_COUNT === WORKER_NUM);

console.log(testFiles.join(' '));

