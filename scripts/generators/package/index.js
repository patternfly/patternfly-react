const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');
const { join, resolve } = require('path');
const { REMOVE_NPM_SCOPE } = require('../helpers');

const packagesRoot = resolve(__dirname, '../../../packages');

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
      const packageBaseTemplate = join(packagesRoot, `./{{${REMOVE_NPM_SCOPE} name}}/`);
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
