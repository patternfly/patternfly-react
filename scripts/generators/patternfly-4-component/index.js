const { join, resolve } = require('path');
const { pascalCase } = require('change-case');
const { ADD_TO_BARREL_FILE } = require('../actionTypes');

const templatesDir = resolve(__dirname, './templates');
const reactCoreRoot = resolve(__dirname, '../../../packages/patternfly-4/react-core');

const componentTypes = new Map([['component', 'components'], ['layout', 'layouts'], ['internal', 'internal']]);

function setPF4Generators(plop) {
  plop.setGenerator('PatternFly 4 Component', {
    description: 'Component or Layout for PatternFly 4 react-core package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What name should the component have?'
      },
      {
        type: 'list',
        name: 'type',
        choices: [...componentTypes.keys()],
        message: 'What type of component is this?'
      }
    ],
    actions: ({ name, type }) => {
      const base = join(templatesDir, './component');
      const typeValue = componentTypes.get(type);
      const data = {
        typeDir: typeValue,
        componentName: pascalCase(name)
      };
      return [
        {
          base,
          data,
          type: 'addMany',
          destination: join(reactCoreRoot, './src/{{typeDir}}/{{componentName}}/'),
          templateFiles: join(base, '**/*.js')
        },
        {
          data,
          type: ADD_TO_BARREL_FILE,
          template: `export * from './{{componentName}}';`,
          path: join(reactCoreRoot, './src/{{typeDir}}/index.js')
        }
      ];
    }
  });
}

module.exports = setPF4Generators;
