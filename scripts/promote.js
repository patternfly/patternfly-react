const regFetch = require('libnpm/fetch');
const npa = require('libnpm/parse-arg');
const Project = require('@lerna/project');

const prereleaseTag = 'prerelease';

// Reverse engineered `npm dist-tag ls` a little bit
async function fetchTags(spec) {
  spec = npa(spec);
  const data = await regFetch.json(`/-/package/${spec.escapedName}/dist-tags`, {
    'prefer-online': true,
    spec
  });
  if (data && typeof data === 'object') delete data._etag;
  if (!data || !Object.keys(data).length) {
    throw new Error('No dist-tags found for ' + spec.name);
  }
  return data;
}

async function getPrereleasePackages() {
  const packages = (await new Project(__dirname).getPackages())
    .filter(p => p.private !== true) // Only packages that are published
    .filter(p => p.name.includes('@patternfly')) // Only PF4 packages
    .filter(p => p.get('publishConfig') && p.get('publishConfig').tag === prereleaseTag);

  return packages;
}

async function printPublishCommand() {
  const packages = await getPrereleasePackages();
  for (let package of packages) {
    const currentTags = await fetchTags(package.name);
    console.log(`Promoting ${package.name} from ${currentTags.latest} to ${currentTags[prereleaseTag]}`);
    console.log(`npm dist-tag add ${package.name}@${currentTags[prereleaseTag]} latest\n`);
  }
}

async function getReleasePackageNames() {
  const packages = (await new Project(__dirname).getPackages())
    .filter(p => p.private !== true) // Only packages that are published
    .filter(p => p.name.includes('@patternfly')) // Only PF4 packages
    .filter(p => p.name !== '@patternfly/react-docs'); // Only used in patternfly.org

  return ['@patternfly/patternfly', ...packages.map(package => package.name)];
}

async function printList() {
  const packageNames = await getReleasePackageNames();
  for (let packageName of packageNames) {
    const currentTags = await fetchTags(packageName);
    console.log(`"${packageName}": "${currentTags[prereleaseTag] || currentTags.latest}",`);
  }
}

if (process.argv[2] && process.argv[2].includes('list')) {
  printList();
}
else {
  printPublishCommand();
}
