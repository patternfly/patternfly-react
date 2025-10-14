import figma from '@figma/code-connect';
import { NavItem } from '@patternfly/react-core';

// Documentation for SubnavItem can be found at https://www.patternfly.org/components/navigation

figma.connect(
  NavItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7174',
  {
    props: {
      id: figma.enum('Expansion', {
        Default: 'target-nested-link-id',
        'Expandable - Open': 'target-nested-link-id',
        'Expandable - Closed': 'target-nested-link-id'
      }),
      isActive: figma.enum('State', { Selected: true }),
      navItemText: figma.string('Nav item')
    },
    example: (props) => (
      <NavItem
        preventDefault
        id={props.id}
        to={`#${props.id}`}
        isActive={props.isActive}
        groupId="nav-expandable-group-id"
        itemId="nav-expandable-group-id_item"
      >
        {props.navItemText}
      </NavItem>
    )
  }
);
