var xmlDocument = require('xmldoc');

// stacked bar chart & execution details data gets captured during input xml parsing 
var dataSeries = '';
var testExecInfo = {testStartedOn: undefined, totalTests: 0, passRate: 0.0, execTime: 0.0};

// html report file headers
var reportTitle = '<title>Protractor Test Report</title>';
var reportCss = '<style> #td-table, tr, td { \
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; \
    text-align: left; \
    border-collapse: collapse; \
    font-size: small; \
    border: 1px solid #000000; \
    padding: 9px; \
    background-color: #CFD8DC; \
    margin: 10px auto; \
  } \
  #td-table-header { \
    font-size: 1em; \
    border: 1px solid #000000; \
    padding: 9px; \
    background-color: #607D8B; \
    color: white;\
  } \
  #td-table-spec { \
    background-color: #90A4AE; \
    color: black; \
  } \
  #td-table-test-pass { \
    background-color: #009688; \
    color: white; \
  } \
  #td-table-test-fail { \
    background-color: #F7464A; \
    color: white; \
  } \
  #td-table-test-skip { \
    background-color: #FFEB3B; \
    color: black; \
  } \
  #ts-table, #tr-ts-table, #td-ts-table { \
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; \
    width: 95%; \
    text-align: left; \
    font-size: small; \
    border: none; \
    padding: 9px; \
    margin: 10px auto; \
    background-color: white \
  } \
  #div-ts-table { \
    text-align: center; \
    outline: thin solid; \
    padding: 9px; \
    background: #CFD8DC; \
    font-size: medium; \
  } \
  #stacked-bar-chart { \
    width: 600px; \
    height: 300px; \
  } \
  li { \
    padding-top:0px; \
    list-style-type: none; \
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; \
    font-size: small; \
    padding: 7px; \
  } \
</style>'

var reportScript = '<script type="text/javascript" src="https://www.google.com/jsapi"></script> \
  <script type="text/javascript"> \
    google.load("visualization", "1", {packages:["corechart"]}); \
    google.setOnLoadCallback(drawChart); \
    function drawChart() { \
      var data = google.visualization.arrayToDataTable([ \
        ["Genre", "Passed", "Failed", "Skipped"], <dataSeries>]); \
      var options = { \
        width: 600, \
        height: 300, \
        legend: { position: "top", maxLines: 3 }, \
        bar: { groupWidth: "50%" }, \
        isStacked: true, \
        colors: [ "#009688", "#B71C1C", "#FFEB3B"] \
      }; \
    var chart = new google.visualization.BarChart(document.getElementById("stacked-bar-chart")); \
    chart.draw(data, options); \
    } \
  </script>';

function entity(str){
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt')
    .replace(/>/g, '&gt;')
    .replace(/\\"/g, '"');
}

var generateTDTable = function (reportXml) {
  var totalTests = 0;
  var totalFailures = 0;
  var totalSkips = 0;
  var totalExecTime = 0;
  var testDetailsTable = '<tr><th id="td-table-header">Spec Description</th> \
    <th id="td-table-header">Status</th> \
    <th id="td-table-header">Details</th></tr>';

  var xmlData = reportXml;
  var testResultXml = new xmlDocument.XmlDocument(xmlData);
  var testSuites = testResultXml.childrenNamed('testsuite');
  var testStartedOn = testSuites[0].attr.timestamp;
  var totalSuites = testSuites.length;

  // Capture tessuite execution details   
  for (var i = 0; i < totalSuites; i++) {
    var suiteName = testSuites[i].attr.name;
		var suiteTestErrors = parseInt(testSuites[i].attr.errors);
		var suiteTotalTests = parseInt(testSuites[i].attr.tests);
		var suiteTestSkips = parseInt(testSuites[i].attr.skipped);
		var suiteTestFailures = parseInt(testSuites[i].attr.failures);
		var suiteTestTime = parseFloat(testSuites[i].attr.time);
		var suitePassedTests = suiteTotalTests - suiteTestErrors - suiteTestSkips - suiteTestFailures;
		totalTests += suiteTotalTests;
		totalFailures += suiteTestFailures;
		totalSkips += suiteTestSkips;
		totalExecTime += suiteTestTime;

    // Capture data for stacked barchart
    dataSeries += '["' + suiteName + '",' + suitePassedTests + ',' + suiteTestFailures + ',';
    dataSeries += suiteTestSkips + ']';
    dataSeries = (i == totalSuites - 1) ? dataSeries : dataSeries + ',';

		testDetailsTable += '<tr><td id="td-table-spec" colspan=3>' + suiteName + '</td></tr>';
		var testcases = testSuites[i].childrenNamed('testcase');

    // Capture tescase execution details for each testsuite
		for(var j in testcases) {
		  testDetailsTable += '<tr><td>' + testcases[j].attr.name; + '</td>'
			var testFailed = testcases[j].childNamed('failure');
			var testSkipped = testcases[j].childNamed('skipped');
      var testError = testcases[j].childNamed('error');
			if(testFailed) {
				testDetailsTable += '<td id="td-table-test-fail">Failed</td><td><pre>' + entity(testFailed.val) + '</pre></td>';
			}
			else if(testSkipped) {
				testDetailsTable += '<td id="td-table-test-skip">Skipped</td><td><pre>' + entity(testSkipped.val) + '</pre></td>';
			} 
      else if(testError) {
        testDetailsTable += '<td id="td-table-test-fail">Error</td><td><pre>' + entity(testError.val) + '</pre></td>';
      }
      else{
				testDetailsTable += '<td id="td-table-test-pass">Passed</td><td></td>'
			}
			testDetailsTable += '</tr>';
		}
	}
  testExecInfo['testStartedOn'] = testStartedOn;
  testExecInfo['totalTests'] = totalTests;
  testExecInfo['passRate'] = ((totalTests - totalFailures - totalSkips) / totalTests).toFixed(3);
  testExecInfo['execTime'] = totalExecTime.toFixed(3);
  return testDetailsTable;
};

var generateTSTable = function(testConfig) {
  var testSummaryTable = '<tr id="tr-ts-table"><th colspan=2><div id="div-ts-table">';
  var testReportTitle = testConfig['reportTitle'] == undefined ? 'Test Execution Report' : testConfig['reportTitle'];
  testSummaryTable += testReportTitle + '</div></th></tr>';
  testSummaryTable += '<tr id="tr-ts-table"><td id="td-ts-table"><div>';
  for (var testConfigParam in testConfig) {
    if(testConfigParam != 'reportTitle' && testConfigParam != 'outputPath') {
      testSummaryTable += '<li><b>' + testConfigParam + ' :</b> ' + testConfig[testConfigParam]  + '</li>';
    }
  }
  testSummaryTable += '<li><b>Test Start:</b> ' + testExecInfo['testStartedOn'] + '</li>';
  testSummaryTable += '<li><b>Total Tests:</b> ' + testExecInfo['totalTests'] + '</li>';
  testSummaryTable += '<li><b>Pass Rate:</b> ' + testExecInfo['passRate'] * 100 + '% </li>';
  testSummaryTable += '<li><b>Execution Duration:</b> ' + testExecInfo['execTime'] + ' Secs</li>';
  testSummaryTable += '</ul></div></td><td id="td-ts-table" rowspan=2>';
  testSummaryTable +='<div id="stacked-bar-chart"></div></td></tr>';
  return testSummaryTable;
}

function getHTMLReport(reportXml, testConfig) {
  var testDetails = generateTDTable(reportXml);
  var testSummary = generateTSTable(testConfig);

  // Feed data to stacked bar chart 
  reportScript = reportScript.replace('<dataSeries>', dataSeries);
   
  // Prepare for html file content
  var htmlReport = '<html><head>' + reportTitle + reportCss + reportScript + '</head>';
  htmlReport += '<body>' + '<table id="ts-table">' + testSummary + '</table>';
  htmlReport += '<table id="td-table">' + testDetails + '</table>';
  htmlReport += '</body></html>';
  
  return htmlReport;
}

// @exports
module.exports = { getHTMLReport };