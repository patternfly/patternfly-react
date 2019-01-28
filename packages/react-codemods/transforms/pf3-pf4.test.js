import { EOL as SYSTEM_EOL } from 'os';
import prettier from 'prettier';
import { defineInlineTest, runInlineTest } from 'jscodeshift/dist/testUtils';
import transform from './pf3-pf4';

/**
 * Codemod outputs should follow the EOL pattern of the target codebase, not
 * Patternfly's. Patternfly currently enforces LF as line ending, independent of
 * the OS building the codebase.
 *
 * JSCodeShift produces OS-dependent line endings however, LF for Unix based
 * systems, and CRLF for Windows based ones. This is also likely what most
 * projects would like to see the codemod prduce.
 *
 * To make sure we both adhere to Patternfly's conventions, and compare the
 * correct OS-specific line endings during the test cases' assertions, we store
 * expected values with LF line endings, and convert them into the OS-specific
 * ones at runtime using prettier.
 */
const PRETTIER_EOL = SYSTEM_EOL === '\r\n' ? 'crlf' : 'cr';
const prettierConfig = {
  ...prettier.resolveConfig.sync(process.cwd()),
  parser: 'babel',
  endOfLine: PRETTIER_EOL
};
const pretty = src => prettier.format(src, prettierConfig);

global.console.log = jest.fn();

test('throws error for components that are not supported', () => {
  expect(() => {
    const options = {
      components: 'Button,UnsupportedComponent'
    };
    runInlineTest(transform, options, { source: '' }, '');
  }).toThrowErrorMatchingSnapshot();
});

defineInlineTest(
  transform,
  { components: '*' },
  `
import { Button } from 'patternfly-react';
const Btn = <Button />;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const Btn = <Button variant="secondary" />;
  `),
  'Supports passing * for all components'
);

defineInlineTest(
  transform,
  { components: '*' },
  `
import { Button } from 'patternfly-react';
const Btn = <Button />;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const Btn = <Button variant="secondary" />;
  `),
  'Supports passing * for all components'
);

defineInlineTest(
  transform,
  { components: 'Button' },
  `
import { Button, Alert } from 'patternfly-react';
const Btn = <Button />;
const alert = <Alert />;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    import { Alert } from 'patternfly-react';
    const Btn = <Button variant="secondary" />;
    const alert = <Alert />;
  `),
  'Supports passing a component name through options'
);

defineInlineTest(
  transform,
  { components: 'Button' },
  `
import { Button, OtherComponent } from 'patternfly-react';
const Btn = <Button />;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    import { OtherComponent } from 'patternfly-react';
    const Btn = <Button variant="secondary" />;
  `),
  'Retains patternfly-react import if all of the component imports were not transformed'
);
