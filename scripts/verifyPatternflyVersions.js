/* eslint-disable no-console */
const semver = require('semver');
const { detectProjects } = require("lerna/utils");

// '@patternfly/patternfly': {'4.0.4': ['@patternfly/react-styles', ...]},
// '@patternfly/react-core': {'^4.0.3': ['@patternfly/react-docs', ...]]
const patternflyDeps = {};
const otherDeps = ['typescript', 'tslib'];

async function accumulateDependencies(package, dependencies) {
  if (!dependencies) {
    return;
  }
  Object.entries(dependencies)
    .filter(([dep, _version]) => dep.startsWith('@patternfly') || otherDeps.includes(dep))
    .forEach(([dep, version]) => {
      patternflyDeps[dep] = patternflyDeps[dep] || {};
      patternflyDeps[dep][version] = patternflyDeps[dep][version] || [];
      patternflyDeps[dep][version].push(package);
    });
}

function setDependency(dependencies, package, version) {
  if (dependencies && dependencies[package]) {
    dependencies[package] = version;
  }
}

async function verifyPatternflyVersions() {
  const { projectGraph, projectFileMap } = await detectProjects();
  Object.values(projectGraph.nodes).forEach((node) => {
    const package = node.package;
    accumulateDependencies(package.name, { [package.name]: `^${package.version}` });
    accumulateDependencies(package.name, package.dependencies);
    accumulateDependencies(package.name, package.devDependencies);
  });

  let failed = false;
  const mismatchedVersions = Object.entries(patternflyDeps).filter(
    ([_dep, versions]) => Object.keys(versions).length > 1
  );

  mismatchedVersions.forEach(([dep, versions]) => {
    failed = true;
    console.error(`Mismatching versions for ${dep}:`);
    Object.entries(versions).forEach(([version, packages]) => console.error(`${version}: ${packages.join(' ')}`));
  });

  if (process.argv[2] === '--fix') {
    mismatchedVersions.forEach(([dep, versions]) => {
      const highestVersion = Object.keys(versions)
        .sort((a, b) => semver.compare(a.replace(/^\^/, ''), b.replace(/^\^/, '')))
        .pop();
      Object.keys(versions)
        .filter((version) => version !== highestVersion)
        .map((version) => versions[version])
        .forEach((mismatchedPackages) => {
          console.log(`Writing ${dep}@${highestVersion}:`);
          mismatchedPackages
            .map((package) => projectGraph.nodes[package])
            .forEach((package) => {
              console.log(package.package.manifestLocation);
              setDependency(package.package.dependencies, dep, highestVersion);
              setDependency(package.package.devDependencies, dep, highestVersion);
              package.package.serialize();
            });
        });
    });
  } else if (failed) {
    console.error('\nRun script again with --fix to bump to latest version');
    process.exit(1);
  }
}

verifyPatternflyVersions();
