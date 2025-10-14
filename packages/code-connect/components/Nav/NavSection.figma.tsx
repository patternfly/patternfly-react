import figma from '@figma/code-connect';
import { NavGroup, NavList } from '@patternfly/react-core';

// Documentation for NavGroup can be found at https://www.patternfly.org/components/navigation

figma.connect(
  NavGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7233&m=dev',
  {
    props: {
      groupHeader: figma.boolean('Group header', {
        true: 'Group header',
        false: undefined
      }),

      children: figma.children('Nav item')
    },
    example: (props) => (
      <NavGroup title={props.groupHeader}>
        <NavList>{props.children}</NavList>
      </NavGroup>
    )
  }
);
