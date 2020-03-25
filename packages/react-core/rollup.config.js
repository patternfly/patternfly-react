import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';

module.exports = {
  input: 'dist/esm/index.js',
  output: {
    file: 'react-core.umd.js',
    format: 'umd',
    name: 'react-core',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs({
      // include: [
      //   /node_modules/
      // ]
    }),
    scss()
  ],
};