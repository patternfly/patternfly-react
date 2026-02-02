import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const esmPackageJsonPath = join(__dirname, '../dist/esm/package.json');

// Ensure dist/esm directory exists
mkdirSync(dirname(esmPackageJsonPath), { recursive: true });

// Write package.json to mark ESM directory as a module
writeFileSync(esmPackageJsonPath, JSON.stringify({ type: 'module' }, null, 2));
