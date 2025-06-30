import { DescriptionList } from '@patternfly/react-core';
import figma from '@figma/code-connect';

// Documentation for DescriptionList can be found at https://www.patternfly.org/components/description-list

figma.connect(
  DescriptionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3946',
  {
    props: {
      // enum
      isCompact: figma.enum('Spacing', { Compact: true }),
      isFluid: figma.enum('Orientation', { 'Horizontal - Fluid': true }),
      isHorizontal: figma.enum('Orientation', {
        'Horizontal - Fixed': true,
        'Horizontal - Fluid': true
      }),

      children: figma.children('Description list item')
    },
    example: (props) => (
      <DescriptionList isFluid={props.isFluid} isCompact={props.isCompact} isHorizontal={props.isHorizontal}>
        {props.children}
      </DescriptionList>
    )
  }
);
