const fs = require('fs');
const { hashElement } = require("folder-hash");
const Project = require('@lerna/project');
const RunCommand = require('@lerna/run')
const filterPackages = require('@lerna/filter-packages');

const cacheFile = '.cache/incrementalCache'
let cache = {}
if (fs.existsSync(cacheFile)) {
  cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
}

const lernaRoot = new Project(__dirname);

const whitelist = [
  '@patternfly/react-charts',
  '@patternfly/react-core',
  '@patternfly/react-inline-edit-extension',
  '@patternfly/react-styled-system',
  '@patternfly/react-styles',
  '@patternfly/react-table',
  '@patternfly/react-tokens',
  '@patternfly/react-icons',
]

// These are packages we need to rebuild
async function getInvalidPackages() {
  let packages = filterPackages(await lernaRoot.getPackages(), whitelist, [], true)

  for (let p of packages) {
    // Assume src directory gets made into dist
    const watchDir = p.name === '@patternfly/react-icons' ? 'build' : 'src'
    p.hash = (await hashElement(`${p.location}/${watchDir}`)).hash
    p.valid = cache && cache[p.name] === p.hash
  }

  return packages.filter(p => !p.valid)
}

async function incrementalBuild() {
  const packages = await getInvalidPackages()

  if (packages.length > 0) {
    // Run for all invalid packages
    // console.log(packages.map(p => p.name))
    await RunCommand({
      cwd: '.',
      script: 'build',
      npmClient: 'yarn',
      scope: packages.map(p => p.name)})
    // Mark as valid
    packages.forEach(p => cache[p.name] = p.hash)
    fs.mkdirSync('.cache')
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 4))
  }
}

incrementalBuild().then()
// new ListCommand({cwd: '.', _: ['ll']}).then(list => {
//   console.log('list', list)
// })

// const packages = helpers.getPfPackages(true).then(packages => console.log('packages', packages));

