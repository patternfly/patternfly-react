// This script should be replaced by some standard incremental build system
// `tsc` is a pretty good example...
const fs = require('fs');
const { hashDir } = require("./hashDir");
const Project = require('@lerna/project');
const RunCommand = require('@lerna/run')

// Load cache
const cacheFile = '.cache/incrementalCache';
let cache = {};
if (fs.existsSync(cacheFile)) {
  cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
}
const yarnLockHash = hashDir('yarn.lock');

// Package filtering
const isPf3 = process.argv.length > 2 && process.argv[2] === 'pf3';
const isPf4 = process.argv.length > 2 && process.argv[2] === 'pf4';

const commonPackages = [
  '@patternfly/react-icons'
];

// Assume src directory gets made into dist
const getSrcDirs = packageName => {
  switch(packageName) {
    case '@patternfly/react-icons':
      return ['build', 'src']
    default:
      return ['src']
  }
};

const hashPackageSrc = (packageLoc, packageName) => {
  let hash = 0;
  for (let srcDir of getSrcDirs(packageName)) {
    hash += hashDir(`${packageLoc}/${srcDir}`);
  }

  return hash;
}

// These are packages we need to rebuild
async function getInvalidPackages() {
  const packages = (await new Project(__dirname).getPackages())
    .filter(p => p.scripts.build) // Only packages that have a build target
    .filter(p => isPf3
      ? p.location.indexOf('patternfly-3') > 0 || commonPackages.indexOf(p.name) >= 0
      : true) // Based off argv
    .filter(p => isPf4
      ? p.location.indexOf('patternfly-4') > 0 || commonPackages.indexOf(p.name) >= 0
      : true); // Based off argv

  for (let p of packages) {
    p.hash = hashPackageSrc(p.location, p.name);
    p.valid = cache && cache[p.name] === p.hash;
    if (p.valid) {
      console.info('Skipping', p.name, '(already built).');
    }
  }

  // Invalidate everything if any deps change.
  if (cache['yarn.lock'] !== yarnLockHash) {
    return packages;
  }

  return packages.filter(p => !p.valid);
}

getInvalidPackages().then(packages => {
  if (packages.length > 0) {
    // Run for all invalid packages
    RunCommand({
      cwd: '.',
      script: 'build',
      npmClient: 'yarn',
      scope: packages.map(p => p.name)
    }).then(() => {
      // Mark as valid
      packages.forEach(p => cache[p.name] = p.hash);
      if (!fs.existsSync('.cache')) {
        fs.mkdirSync('.cache');
      }
      cache['yarn.lock'] = yarnLockHash;
      fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
    })
  }
});
