const HTMLReport = require('jasmine-xml2html-converter');
// Call custom report for html output
testConfig = {
  reportTitle: 'Cypress Test Coverage Execution Report',
  outputPath: './'
};
new HTMLReport().from('.' + '/merged-test-results.xml', testConfig); 