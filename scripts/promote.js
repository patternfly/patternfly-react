const regFetch = require('libnpm/fetch');
const npa = require('libnpm/parse-arg');
const Project = require('@lerna/project');

// Reverse engineered `npm dist-tag ls` a little bit
async function fetchTags(spec) {
  spec = npa(spec);
  const data = await regFetch.json(
    `/-/package/${spec.escapedName}/dist-tags`,
    {
      'prefer-online': true,
      spec
    }
  );
  if (data && typeof data === 'object') delete data._etag
  if (!data || !Object.keys(data).length) {
    throw new Error('No dist-tags found for ' + spec.name)
  }
  return data
}

async function getPrereleasePackages() {
  const packages = (await new Project(__dirname).getPackages())
    .filter(p => p.private !== true) // Only packages that are published
    .filter(p => p.name.includes('@patternfly')) // Only PF4 packages
    .filter(p => p.get('publishConfig') && p.get('publishConfig').tag === 'prerelease');

  return packages;
}

async function printPublishCommand() {
  const packages = await getPrereleasePackages();
  for (let package of packages) {
    const currentTags = await fetchTags(package.name);
    console.log(`Promoting ${package.name} from ${currentTags.latest} to ${currentTags.prerelease}`);
    console.log(`npm dist-tag add ${package.name}@${currentTags.prerelease} latest`);
  }
}

printPublishCommand();
