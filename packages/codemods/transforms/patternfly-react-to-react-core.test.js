import { defineInlineTest } from 'jscodeshift/dist/testUtils';
import transform from './patternfly-react-to-react-core';

defineInlineTest(
  transform,
  {},
  `import { Button, Alert } from 'patternfly-react'`,
  `import { Button, Alert } from '@patternfly/react-core'`,
  'Transforms patternfly-react to @patternfly/react-core'
);

defineInlineTest(
  transform,
  {},
  `import { Button, Alert } from '@patternfly/react-core'`,
  '',
  'ignores @patternfly/react-core imports'
);

defineInlineTest(
  transform,
  {},
  `
  import { somthing } from 'patternfly';
  import { Button, Alert } from 'patternfly-react';
  `,
  `
  import { somthing } from 'patternfly';
  import { Button, Alert } from '@patternfly/react-core';
  `,
  'ignores patternfly imports'
);
