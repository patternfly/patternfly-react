import figma from '@figma/code-connect';
import { NavItem, NavExpandable } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

// Documentation for NavItem can be found at https://www.patternfly.org/components/navigation

const sharedProps = {
  icon: figma.boolean('Icon', {
    true: <PlusCircleIcon />,
    false: undefined
  }),
  id: figma.enum('Type', {
    Default: 'target-link-id',
    'Expandable - Open': 'target-link-id',
    'Expandable - Closed': 'target-link-id'
  }),
  isActive: figma.enum('State', { Selected: true }),
  navItemText: figma.string('Nav item')
};

figma.connect(
  NavItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7119',
  {
    props: {
      ...sharedProps
    },
    example: (props) => (
      <NavItem preventDefault icon={props.icon} id={props.id} to={`#${props.id}`} itemId={0} isActive={props.isActive}>
        {props.navItemText}
      </NavItem>
    )
  }
);

figma.connect(
  NavItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7119',
  {
    variant: { Type: 'Expandable - Open' },
    props: {
      ...sharedProps
    },
    example: (props) => (
      <NavExpandable title={props.navItemText} groupId="nav-expandable-group" isActive={props.isActive} isExpanded>
        {props.navItemText}
      </NavExpandable>
    )
  }
);

figma.connect(
  NavItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7119',
  {
    variant: { Type: 'Expandable - Closed' },
    props: {
      ...sharedProps
    },
    example: (props) => (
      <NavExpandable title={props.navItemText} groupId="nav-expandable-group" isActive={props.isActive}>
        {props.navItemText}
      </NavExpandable>
    )
  }
);
