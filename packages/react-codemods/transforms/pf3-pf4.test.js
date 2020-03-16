import prettier from 'prettier';
import { defineInlineTest, runInlineTest } from 'jscodeshift/dist/testUtils';
import transform from './pf3-pf4';

const prettierConfig = {
  ...prettier.resolveConfig.sync(process.cwd()),
  parser: 'babel'
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
