import figma from '@figma/code-connect';
import { Card, DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@patternfly/react-core';

// Note: DescriptionList label and description are not dynamic. DescriptionList list label composition doesn't currently align with the React component.
// Note: DescriptionListLabel requires updates to the React component to support dynamic composition.
// Documentation for DescriptionList can be found at https://www.patternfly.org/components/description-list-in-card

figma.connect(
  DescriptionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4421-28234&m=dev',
  {
    props: {
      isCompact: figma.enum('Card size', { Small: true }),
      isLarge: figma.enum('Card size', { Large: true }),
      isHorizontal: figma.enum('Orientation', { Horizontal: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <DescriptionList isHorizontal={props.isHorizontal}>
        <Card component="div" isCompact={props.isCompact} isLarge={props.isLarge}>
          <DescriptionListTerm>Input label</DescriptionListTerm>
          <DescriptionListDescription>Description list item</DescriptionListDescription>
        </Card>
      </DescriptionList>
    )
  }
);
