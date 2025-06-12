import figma from '@figma/code-connect';
import { DescriptionListGroup, DescriptionListDescription } from '@patternfly/react-core';

figma.connect(
  DescriptionListGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3571&m=dev',
  {
    props: {
      // string
      content: figma.string('✏️ Content'),

      // enum
      type: figma.enum('Type', {
        Vertical: 'vertical',
        'Horizontal fluid': 'horizontal-fluid',
        'Horizontal fixed': 'horizontal-fixed'
      }),

      // instance
      swapLabel: figma.instance('Swap label'),

      children: figma.children('*')
    },

    example: (props) => (
      <DescriptionListGroup>
        {props.children}
        <DescriptionListDescription>{props.content}</DescriptionListDescription>
      </DescriptionListGroup>
    )
  }
);
