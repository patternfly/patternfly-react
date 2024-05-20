// @ts-check
import baseConfig from '../rollup.base.mjs';
import pkg from './package.json' with { type: 'json' };

export default baseConfig({
  packageName: pkg.name.replace('@patternfly/', ''),
  name: 'PatternFlyTable'
});
