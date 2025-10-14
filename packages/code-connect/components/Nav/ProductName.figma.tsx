import figma from '@figma/code-connect';
import { Content, ContentVariants, NavGroup } from '@patternfly/react-core';

// Documentation for ProductName can be found at https://www.patternfly.org/components/navigation

figma.connect(
  NavGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2104-7229',
  {
    props: {
      productName: figma.string('Product name')
    },
    example: (props) => (
      <div className="pf-v6-c-nav__section-title">
        <Content component={ContentVariants.h2}>{props.productName}</Content>
      </div>
    )
  }
);
