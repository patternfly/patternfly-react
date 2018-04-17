const path = require('path');
const { execSync } = require('child_process');

const script = process.argv[2];
const cwd = path.resolve(__dirname, '../');

execSync(`yarn ${script}`, { cwd, stdio: 'inherit' });
