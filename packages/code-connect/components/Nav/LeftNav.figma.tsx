import figma from '@figma/code-connect';
import { Nav } from '@patternfly/react-core';

// Documentation for Nav can be found at https://www.patternfly.org/components/navigation

figma.connect(Nav, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7106', {
  props: {
    children: figma.children(['Nav Section', 'Nav divider', 'ProductName'])
  },
  example: (props) => <Nav>{props.children}</Nav>
});
