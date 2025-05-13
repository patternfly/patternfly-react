import { Divider } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  Divider,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2764-6708&m=dev',
  {
    props: {
      /**
       * TODO: This is a good example of how properties in Figma and props in React would benefit from naming consistency
       * React is looking for orientation, figma is defining orientation as 'Direction'
       */
      orientation: figma.enum('Direction', {
        Vertical: { default: 'vertical' }
      }),
      /**
       * TODO: Figma allows optional insets, but default to insetMd
       */
      inset: figma.boolean('With insets', {
        true: { default: 'insetMd' },
        false: undefined
      })
    },
    example: (props) => <Divider orientation={props.orientation} inset={props.inset} />
  }
);
