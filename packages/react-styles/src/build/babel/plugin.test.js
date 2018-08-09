jest.mock('../util').mock('resolve-from');

import * as babel from 'babel-core';
import plugin from './plugin';
import * as utils from '../util';
import resolveFrom from 'resolve-from';

const mockCSS = `
:root {
  --pf-global--Color--hover: #fff;
}
.pf-c-class-name {}
.pf-m-active {}
`;

const defaultOptions = {
  srcDir: './src',
  outDir: './dist',
  useModules: true
};

const getPlugin = (overrides = {}) => [
  plugin,
  {
    ...defaultOptions,
    ...overrides
  }
];

resolveFrom.mockImplementation((scriptDir, importPath) => importPath);
utils.getCSS.mockReturnValue(mockCSS);
const getCSSOutputPathReturnValue = cssFilePath => `${cssFilePath}.js`;
utils.getCSSOutputPath.mockImplementation((outDir, rootPath, cssFilePath) => getCSSOutputPathReturnValue(cssFilePath));
utils.getRelativeImportPath.mockImplementation((_, cssOutputPath) => cssOutputPath);
const cssToJSReturnValue = 'JSCSS';
utils.cssToJS.mockReturnValue(cssToJSReturnValue);

it('ignores none css imports', () => {
  const file = `import something from 'something';`;
  const { code } = babel.transform(file, { plugins: [getPlugin()] });
  expect(code).toMatchSnapshot();
});

it('updates the import path', () => {
  const importPath = 'something.css';
  const file = `import styles from '${importPath}';`;
  const { code } = babel.transform(file, {
    plugins: [getPlugin()]
  });
  expect(resolveFrom).toBeCalledWith(expect.any(String), importPath);
  expect(utils.getCSS).toBeCalledWith(importPath);
  expect(utils.getCSSOutputPath).toBeCalledWith(defaultOptions.outDir, expect.any(String), importPath);
  expect(utils.writeCSSJSFile).toBeCalledWith(
    expect.any(String),
    importPath,
    getCSSOutputPathReturnValue(importPath),
    cssToJSReturnValue
  );
  expect(code).toMatchSnapshot();
});

it('validates class reference', () => {
  const file = `
  import styles from 'something.css';

  const className = styles.className;
  const badClassName = styles.doesNotExist;
  `;
  expect(() => {
    babel.transform(file, {
      plugins: [getPlugin()]
    });
  }).toThrowErrorMatchingSnapshot();
});

it('validates modifier reference', () => {
  const file = `
  import styles from 'something.css';

  const className = styles.modifiers.active;
  const badModifier = styles.modifiers.doesNotExist;
  `;
  expect(() => {
    babel.transform(file, {
      plugins: [getPlugin()]
    });
  }).toThrowErrorMatchingSnapshot();
});
