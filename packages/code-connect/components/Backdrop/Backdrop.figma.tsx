import figma from '@figma/code-connect';
import { Backdrop } from '@patternfly/react-core';

/**
/**
 * PatternFly Backdrop integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/backdrop
 */

figma.connect(
  Backdrop,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2873-2900&m=dev',
  {
    example: () => <Backdrop />
  }
);
