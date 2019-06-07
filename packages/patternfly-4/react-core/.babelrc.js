module.exports = {
  presets: ['@babel/react'],
  ignore: ['**/__snapshots__', '**/*.d.ts'],
  plugins: [
    '@babel/plugin-transform-typescript',
    'babel-plugin-typescript-to-proptypes',
    '@babel/plugin-proposal-export-default-from',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ]
};
