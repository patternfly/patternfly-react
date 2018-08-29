const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');
const { join, resolve } = require('path');
const { REMOVE_NPM_SCOPE } = require('../helpers');

const packagesRoot = resolve(__dirname, '../../../packages');
const pf3Root = join(packagesRoot, '/patternfly-3');
const pf4Root = join(packagesRoot, '/patternfly-4');
const typeGeneral = '0';
const typePf3 = '3';
const typePf4 = '4';

function setPackageGenerators(plop) {
  plop.setGenerator('Package', {
    description: 'A new package for the monorepo',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should the package name be?',
        validate(input) {
          const packages = PackageUtilities.getPackages(new Repository());
          const matchingPackage = packages.find(p => p.name === input);
          return matchingPackage ? `Packages already exits at ${matchingPackage.location}` : true;
        }
      },
      {
        type: 'input',
        name: 'packageType',
        message: `What type of package is it? Options: ${typeGeneral} (General package), ${typePf3} (Patternfly 3 package), ${typePf4} (Patternfly 4 package)`,
        validate(input) {
          const validInput = input === typeGeneral || input === typePf3 || input === typePf4;
          return validInput
            ? true
            : `Type must be one of: ${typeGeneral} (General package), ${typePf3} (Patternfly 3 package), ${typePf4} (Patternfly 4 package)`;
        }
      },
      {
        type: 'confirm',
        name: 'buildsWithBabel',
        message: 'Does this build with Babel?'
      },
      {
        type: 'confirm',
        name: 'includeTypings',
        message: 'Will TypeScript definitions be included?'
      }
    ],
    actions: answers => {
      let packageLocation;
      if (answers.packageType === typeGeneral) {
        packageLocation = packagesRoot;
      } else if (answers.packageType === typePf3) {
        packageLocation = pf3Root;
      } else {
        packageLocation = pf4Root;
      }
      const packageBaseTemplate = join(packageLocation, `./{{${REMOVE_NPM_SCOPE} name}}/`);
      return [
        {
          type: 'add',
          path: join(packageBaseTemplate, `package.json`),
          templateFile: resolve(__dirname, './package.json.hbs')
        },
        {
          type: 'add',
          template: '// placeholder\n',
          path: answers.buildsWithBabel
            ? join(packageBaseTemplate, 'src/index.js')
            : join(packageBaseTemplate, 'lib/index.js')
        },
        {
          type: 'add',
          template: '# {{name}}',
          path: join(packageBaseTemplate, 'README.md')
        }
      ];
    }
  });
}

module.exports = setPackageGenerators;
