import figma from '@figma/code-connect';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

// Documentation for Divider can be found at https://www.patternfly.org/components/divider

figma.connect(
  Divider,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2764-6708',
  {
    props: {
      variant: { Direction: 'Vertical' },
      // TODO: Figma allows optional insets, but default to insetMd
      inset: figma.boolean('With insets', {
        true: { default: 'insetMd' },
        false: { default: 'insetNone' }
      }),
      // TODO: This is a good example of how properties in Figma and props in React would benefit from naming consistency
      // React is looking for orientation, figma is defining orientation as 'Direction'
      orientation: figma.enum('Direction', {
        Horizontal: { default: undefined },
        Vertical: { default: 'vertical' }
      })
    },
    example: (props) => (
      <Flex>
        <FlexItem>first item</FlexItem>
        <Divider
          orientation={props.orientation}
          inset={props.inset}
          /* Note: Vertical dividers must be wrapped in a flex container to be visible */
        />
      </Flex>
    )
  }
);

figma.connect(
  Divider,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2764-6708',
  {
    props: {
      // TODO: Figma allows optional insets, but default to insetMd
      inset: figma.boolean('With insets', {
        true: { default: 'insetMd' },
        false: { default: 'insetNone' }
      }),
      // TODO: This is a good example of how properties in Figma and props in React would benefit from naming consistency
      // React is looking for orientation, figma is defining orientation as 'Direction'
      orientation: figma.enum('Direction', {
        Horizontal: { default: undefined },
        Vertical: { default: 'vertical' }
      })
    },
    example: (props) => (
      <Divider
        orientation={props.orientation}
        inset={props.inset}
        /* Note: Vertical dividers must be wrapped in a flex container to be visible */
      />
    )
  }
);
