module.exports = {  
  presets: ['@babel/react'],
  ignore: ['**/__snapshots__', '**/*.d.ts', '**/*.test.*', '**/*.stories.js', '**/Stories', '**/node_modules'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'transform-imports',
      {
        'react-bootstrap': {
          preventFullImport: true,
          transform: importName => `react-bootstrap/lib/${importName}`
        },
        'patternfly-react': {
          preventFullImport: true,
          transform: importName => {
            const srcDir = importName === 'helpers' ? 'common' : `components/${importName}`;
            return `patternfly-react/dist/js/${srcDir}/${importName}`;
          }
        }
      }
    ]
  ]
};
