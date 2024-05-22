// @ts-check
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';
import scss from 'rollup-plugin-scss';

const isProduction = process.env.IS_PRODUCTION;
let exitCode = 0;

  /** @returns {import('rollup').Plugin} */
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

export default function baseConfig({ packageName, name }) {
  /** @type {import('rollup').Plugin[]} */
  const plugins = [
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
    }),
    nodeResolve(),
    commonjs(),
    scss(),
    circularFailPlugin()
  ];

  if (isProduction) {
    plugins.push(terser());
  }

  return defineConfig({
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
    plugins,
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
}
