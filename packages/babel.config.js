module.exports = api => {
  const presets = ['@babel/react'];
  if (!api.env('esm')) {
    presets.push(['@babel/env', {'modules': 'commonjs'}]);
  }
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ];
  if (api.env('esm') || api.env('cjs')) {
    const bootstrapModuleDir = api.env('esm') ? 'es' : 'lib';
    const patternflyModuleDir = api.env('esm') ? 'esm' : 'js';
    plugins.push([
      'transform-imports',
      {
        'react-bootstrap': {
          preventFullImport: true,
          transform: importName => `react-bootstrap/${bootstrapModuleDir}/${importName}`
        },
        'patternfly-react': {
          preventFullImport: true,
          transform: importName => {
            const srcDir = importName === 'helpers' ? 'common' : `components/${importName}`;
            return `patternfly-react/dist/${patternflyModuleDir}/${srcDir}/${importName}`;
          }
        }
      }
    ]);
  }
  return {
    ignore: ['**/__snapshots__', '**/*.test.*', '**/*.stories.js', '**/Stories', '**/node_modules'],
    presets,
    plugins
  }
};
