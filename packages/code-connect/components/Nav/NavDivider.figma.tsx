import figma from '@figma/code-connect';
import { NavItemSeparator } from '@patternfly/react-core';

// Documentation for NavItemSeparator can be found at https://www.patternfly.org/components/navigation

figma.connect(
  NavItemSeparator,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7231',
  {
    props: {},
    example: () => <NavItemSeparator />
  }
);
