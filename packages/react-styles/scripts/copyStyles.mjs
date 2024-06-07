import { copySync } from 'fs-extra/esm';
import path from 'node:path';
import url from 'node:url';

const toDir = path.resolve(import.meta.dirname, '../css');
const fromDir = path.dirname(url.fileURLToPath(import.meta.resolve('@patternfly/patternfly/package.json')));

copySync(path.join(fromDir, 'assets/images'), path.join(toDir, 'assets/images'));
