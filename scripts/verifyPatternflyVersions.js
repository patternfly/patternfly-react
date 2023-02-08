/* eslint-disable no-console */
const semver = require('semver');
const Project = require('@lerna/project');

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
  const packages = await Project.getPackages();

  packages.forEach((package) => {
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
            .map((package) => packages.find((p) => p.name === package))
            .forEach((package) => {
              console.log(package.manifestLocation);
              setDependency(package.dependencies, dep, highestVersion);
              setDependency(package.devDependencies, dep, highestVersion);
              package.serialize();
            });
        });
    });
  } else if (failed) {
    console.error('\nRun script again with --fix to bump to latest version');
    process.exit(1);
  }
}

verifyPatternflyVersions();
