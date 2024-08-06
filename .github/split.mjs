/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

const BASE_DIR = path.resolve(import.meta.dirname, '../packages/react-integration/cypress/integration');
const WORKER_NUM = +process.env.WORKER_NUM;
const WORKER_COUNT = +process.env.WORKER_COUNT;

const testFiles = fs
  .readdirSync(BASE_DIR)
  .sort()
  .filter((_, i) => i % WORKER_COUNT === WORKER_NUM)
  .map((f) => path.join(BASE_DIR, f));

console.log(testFiles.join(' '));
