const { join, resolve } = require('path');
const { ADD_TO_BARREL_FILE } = require('../actionTypes');

const templatesDir = resolve(__dirname, './templates');
const reactCoreRoot = resolve(__dirname, '../../../packages/react-core');

const componentTypes = new Map([
  ['component', 'components'],
  ['layout', 'layouts'],
  ['internal', 'internal']
]);

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
        componentName: name
      };
      return [
        {
          data,
          type: 'add',
          templateFile: join(base, 'component.tsx.hbs'),
          path: join(reactCoreRoot, './src/{{typeDir}}/{{componentName}}/{{componentName}}.tsx')
        },
        {
          data,
          type: 'add',
          templateFile: join(base, 'component.md.hbs'),
          path: join(reactCoreRoot, './src/{{typeDir}}/{{componentName}}/examples/{{componentName}}.md')
        },
        {
          data,
          type: 'add',
          templateFile: join(base, 'index.ts.hbs'),
          path: join(reactCoreRoot, './src/{{typeDir}}/{{componentName}}/index.ts')
        },
        {
          data,
          type: ADD_TO_BARREL_FILE,
          template: `export * from './{{componentName}}';`,
          path: join(reactCoreRoot, './src/{{typeDir}}/index.ts')
        }
      ];
    }
  });
}

module.exports = setPF4Generators;
