/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { getHTMLReport } = require('./htmlReport');
/* eslint-enable @typescript-eslint/no-var-requires */

const junitXml = fs.readFileSync(path.join(__dirname, '../results/merged-test-results.xml'), 'utf8');
const htmlReport = getHTMLReport(junitXml, { reportTitle: 'Cypress Test Coverage Execution Report' });

fs.writeFileSync(path.join(__dirname, '../results/index.html'), htmlReport);
