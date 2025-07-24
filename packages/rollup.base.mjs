// @ts-check
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';
import scss from 'rollup-plugin-scss';
import svg from 'rollup-plugin-svg';

const isProduction = process.env.IS_PRODUCTION;
let exitCode = 0;

/** @returns {import('rollup').Plugin} */
function patternflyResolver() {
  return {
    name: 'patternfly-resolver',
    async resolveId(id, importer) {
      // Only handle PatternFly imports
      if (!id.startsWith('@patternfly/')) {
        return null;
      }

      // Handle directory imports (helpers, components, etc.) by appending /index.js
      if (!id.endsWith('.js') && !id.includes('index') && !id.endsWith('/')) {
        // First try adding /index.js for directory imports
        const resolved = id + '/index.js';
        try {
          return await this.resolve(resolved, importer, { skipSelf: true });
        } catch (e) {
          // If that fails, try adding .js for files
          const resolvedFile = id + '.js';
          try {
            return await this.resolve(resolvedFile, importer, { skipSelf: true });
          } catch (e2) {
            return null;
          }
        }
      }

      return null;
    }
  };
}

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
    patternflyResolver(),
    nodeResolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs'],
      preferBuiltins: false,
      exportConditions: ['import', 'module', 'default'],
      mainFields: ['module', 'main'],
      browser: false,
      modulesOnly: false,
      dedupe: ['react', 'react-dom']
    }),
    commonjs(),
    scss(),
    // SVG plugin does not ship with types.
    // @ts-ignore
    svg(),
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
