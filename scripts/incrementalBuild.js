const fs = require('fs');
const { hashElement } = require("folder-hash");
const Project = require('@lerna/project');
const RunCommand = require('@lerna/run')
const filterPackages = require('@lerna/filter-packages');

let cache = {}
if (fs.existsSync('.incrementalCache')) {
  cache = require('.incrementalCache')
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
  '@patternfly/react-icons'
]

// These are packages we need to rebuild
async function getInvalidPackages() {
  let packages = filterPackages(await lernaRoot.getPackages(), whitelist, [], true)

  for (let p of packages) {
    // Assume src directory gets made into dist
    const hash = (await hashElement(`${p.location}/src`)).hash
    p.valid = cache && cache[p] === hash
  }

  return packages.filter(package => !package.valid)
}

async function incrementalBuild() {
  // const toBuild = await getInvalidPackages()

  // console.log('toBuild', toBuild)
  await RunCommand({cwd: '.', script: 'build', npmClient: 'yarn'})
}

incrementalBuild().then()
// new ListCommand({cwd: '.', _: ['ll']}).then(list => {
//   console.log('list', list)
// })

// const packages = helpers.getPfPackages(true).then(packages => console.log('packages', packages));

