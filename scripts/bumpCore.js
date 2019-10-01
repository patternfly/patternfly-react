const fs = require('fs');
const Project = require('@lerna/project');

// These are packages we need to rebuild
async function getCorePackages() {
  const packages = (await new Project(__dirname).getPackages()).filter(p => {
    if (p.dependencies && Object.keys(p.dependencies).includes('@patternfly/patternfly')) {
      return true;
    }
    if (p.devDependencies && Object.keys(p.devDependencies).includes('@patternfly/patternfly')) {
      return true;
    }
    return false;
  });

  return packages;
}

// https://github.com/lerna/lerna/blob/master/core/package/index.js
getCorePackages().then(packages =>
  packages.forEach(package => {
    const json = require(package.manifestLocation);
    if (json.dependencies && json.dependencies['@patternfly/patternfly']) {
      json.dependencies['@patternfly/patternfly'] = process.argv[2];
    }
    if (json.devDependencies && json.devDependencies['@patternfly/patternfly']) {
      json.devDependencies['@patternfly/patternfly'] = process.argv[2];
    }

    fs.writeFileSync(package.manifestLocation, JSON.stringify(json, null, 2));
  })
);
