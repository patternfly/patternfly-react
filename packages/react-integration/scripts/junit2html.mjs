import fs from 'node:fs';
import path from 'node:path';
import { getHTMLReport } from './htmlReport.mjs';

const junitXml = fs.readFileSync(path.join(import.meta.dirname, '../results/merged-test-results.xml'), 'utf8');
const htmlReport = getHTMLReport(junitXml, { reportTitle: 'Cypress Test Coverage Execution Report' });

fs.writeFileSync(path.join(import.meta.dirname, '../results/index.html'), htmlReport);
