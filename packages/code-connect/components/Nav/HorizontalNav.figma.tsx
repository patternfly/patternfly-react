import figma from '@figma/code-connect';
import { Nav, NavList } from '@patternfly/react-core';

// Documentation for Nav can be found at https://www.patternfly.org/components/navigation

figma.connect(Nav, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7514-12157', {
  props: {
    children: figma.children(['Horizontal Nav item', 'Horizontal Subnav item']),
    variant: figma.enum('Type', {
      Main: 'horizontal',
      Subnav: 'horizontal-subnav'
    })
  },
  example: (props) => (
    <Nav variant={props.variant}>
      <NavList>{props.children}</NavList>
    </Nav>
  )
});
