import prettier from 'prettier';
import { defineInlineTest } from 'jscodeshift/dist/testUtils';
import transform from './pf3-pf4';

const prettierConfig = {
  ...prettier.resolveConfig.sync(process.cwd()),
  parser: 'babel'
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
