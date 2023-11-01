const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const scss = require('rollup-plugin-scss');
const replace = require('@rollup/plugin-replace');
const { terser } = require('rollup-plugin-terser');
const svg = require('rollup-plugin-svg');

const isProduction = process.env.IS_PRODUCTION;
let exitCode = 0;

function circularFailPlugin() {
  return {
    name: 'circluarFailPlugin',
    buildEnd() {
      if (exitCode !== 0) {
        process.exit(exitCode);
      }
    }
  };
}

module.exports = ({ packageName, name }) => ({
  input: 'dist/esm/index.js',
  output: {
    file: `dist/umd/${packageName}${isProduction ? '.min' : ''}.js`,
    format: 'umd',
    inlineDynamicImports: true,
    name,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: ['react', 'react-dom'],
  plugins: [
    replace({
      'process.env.NODE_ENV': `'${isProduction ? 'production' : 'development'}'`
    }),
    nodeResolve(),
    commonjs(),
    scss(),
    svg(),
    isProduction && terser(),
    circularFailPlugin()
  ],
  onwarn(warning) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      const split = warning.message.split(':');
      if (warning.message.includes('d3-interpolate')) {
        // eslint-disable-next-line no-console
        console.error(`\x1b[33m(!) ${split[0]}:\x1b[0m${split[1]}`);
      } else {
        // eslint-disable-next-line no-console
        console.error(`\x1b[31m(!) ${split[0]}:\x1b[0m${split[1]}`);
        exitCode = 1;
      }
    }
  }
});
