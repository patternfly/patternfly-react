import figma from '@figma/code-connect';
import { NavItem } from '@patternfly/react-core';

// Documentation for Nav can be found at https://www.patternfly.org/components/navigation

figma.connect(
  NavItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7262',
  {
    props: {
      isActive: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <NavItem preventDefault id="<target-link-id>" itemId="<link-id>" to="#<target-link-id>" isActive={props.isActive}>
        Nav item
      </NavItem>
    )
  }
);
