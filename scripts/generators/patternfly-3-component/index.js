const { join, resolve } = require('path');
const { pascalCase } = require('change-case');
const { ADD_TO_BARREL_FILE } = require('../actionTypes');

const templatesDir = resolve(__dirname, './templates');
const patternflyReactRoot = resolve(__dirname, '../../../packages/patternfly-3/patternfly-react');

function setPF3Generators(plop) {
  plop.setGenerator('PatternFly 3 Component', {
    description: 'Component for PatternFly 3 patternfly-react package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What name should the component have?'
      }
    ],
    actions: ({ name }) => {
      const base = join(templatesDir, './component');
      const data = {
        componentName: pascalCase(name)
      };
      return [
        {
          base,
          data,
          type: 'addMany',
          destination: join(patternflyReactRoot, './src/components/{{componentName}}/'),
          templateFiles: join(base, '*.js')
        },
        {
          data,
          type: ADD_TO_BARREL_FILE,
          template: `export * from './components/{{componentName}}';`,
          path: join(patternflyReactRoot, './src/index.js')
        }
      ].filter(Boolean);
    }
  });
}

module.exports = setPF3Generators;
