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
        message: 'What should the package name be?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe this package'
      },
      {
        type: 'confirm',
        name: 'buildsWithTypescript',
        message: 'Does this build with Typescript?'
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
          path: answers.buildsWithTypescript
            ? join(packageBaseTemplate, 'src/index.ts')
            : join(packageBaseTemplate, 'lib/index.js')
        },
        answers.buildsWithTypescript &&
        {
          type: 'add',
          path: join(packageBaseTemplate, `.npmignore`),
          templateFile: resolve(__dirname, './.npmignore')
        },
        answers.buildsWithTypescript &&
        {
          type: 'add',
          path: join(packageBaseTemplate, `tsconfig.json`),
          templateFile: resolve(__dirname, './tsconfig.json')
        },
        answers.buildsWithTypescript &&
        {
          type: 'add',
          path: join(packageBaseTemplate, `tsconfig.cjs.json`),
          templateFile: resolve(__dirname, './tsconfig.cjs.json')
        },
        {
          type: 'add',
          template: '# {{name}}',
          path: join(packageBaseTemplate, 'README.md')
        }
      ].filter(Boolean);
    }
  });
}

module.exports = setPackageGenerators;
