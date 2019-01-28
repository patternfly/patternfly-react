import { EOL as SYSTEM_EOL } from 'os';
import prettier from 'prettier';
import { defineInlineTest } from 'jscodeshift/dist/testUtils';
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

defineInlineTest(
  transform,
  {},
  `
import { Button as PFButton } from 'patternfly-react';
const btn = <PFButton bsStyle='primary'>Button</PFButton>;
`,
  pretty(`
    import { Button as PFButton  } from '@patternfly/react-core';
    const btn = <PFButton variant="primary">Button</PFButton>;
  `),
  'Supports import alias'
);

defineInlineTest(
  transform,
  {},
  `
import { Button } from 'patternfly-react';
const btn = <Button bsStyle='primary'>Button</Button>;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const btn = <Button variant="primary">Button</Button>;
  `),
  'Transforms bsStyle primary to variant primary'
);

defineInlineTest(
  transform,
  {},
  `
import { Button } from 'patternfly-react';
const btn = <Button block>Button</Button>;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const btn = <Button isBlock variant="secondary">Button</Button>;
  `),
  'Transforms block to isBlock'
);

defineInlineTest(
  transform,
  {},
  `
  import { Button } from 'patternfly-react';
  const btn = <Button disabled>Button</Button>;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const btn = <Button isDisabled variant="secondary">Button</Button>;
  `),
  'Transforms disabled to isDisabled'
);

defineInlineTest(
  transform,
  {},
  `
import { Button } from 'patternfly-react';
const btn = <Button active>Button</Button>;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const btn = <Button isActive variant="secondary">Button</Button>;
  `),
  'Transforms active to isActive'
);

defineInlineTest(
  transform,
  {},
  `
import { Button } from 'patternfly-react';
const btn = <Button componentClass="a">Button</Button>;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const btn = <Button component="a" variant="secondary">Button</Button>;
  `),
  'Transforms componentClass to component'
);

defineInlineTest(
  transform,
  {},
  `
import { Button } from 'patternfly-react';
const btn = <Button bsClass="btn">Button</Button>;
`,
  pretty(`
    import { Button } from '@patternfly/react-core';
    const btn = <Button variant="secondary">Button</Button>;
  `),
  'Removes bsClass prop'
);

defineInlineTest(
  transform,
  {},
  `
import { Button } from 'patternfly-react';
const btn = <Button bsSize="sm">Button</Button>;
const supported = <Button>Button</Button>;
`,
  '',
  'Ignores file for bsSize references'
);
