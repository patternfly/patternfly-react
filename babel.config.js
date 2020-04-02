module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react'
  ],
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}