import figma from '@figma/code-connect';
import { NavItem } from '@patternfly/react-core';

// Documentation for SubnavItem can be found at https://www.patternfly.org/components/navigation

figma.connect(
  NavItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7254',
  {
    props: {},
    example: () => (
      <NavItem
        preventDefault
        id="<target-nested-link-id>"
        to="#<target-nested-link-id>"
        isActive={false}
        groupId="nav-expandable-group-id"
        itemId="nav-expandable-group-id_item"
      >
        Nav item
      </NavItem>
    )
  }
);
