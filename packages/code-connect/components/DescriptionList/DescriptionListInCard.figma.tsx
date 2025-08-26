import figma from '@figma/code-connect';
import { Card, DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@patternfly/react-core';

// Note: DescriptionList displaySize prop is set by displaySize.
// Note: DescriptionList label and description are not dynamic. DescriptionList list label composition doesn't currently align with the React component.
// Note: DescriptionListLabel requires updates to the React component to support dynamic composition.
// TODO: DESIGN: Separate card and description list size properties.
// Documentation for DescriptionList can be found at https://www.patternfly.org/components/description-list-in-card

figma.connect(
  DescriptionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4421-28234&m=dev',
  {
    props: {
      displaySize: figma.enum('Card size', {
        Small: 'default',
        Default: 'lg',
        Large: '2xl'
      }),
      isHorizontal: figma.enum('Orientation', { Horizontal: true })
    },
    example: (props) => (
      <DescriptionList isHorizontal={props.isHorizontal} displaySize={props.displaySize}>
        <Card component="div">
          <DescriptionListTerm>Input label</DescriptionListTerm>
          <DescriptionListDescription>Description list item</DescriptionListDescription>
        </Card>
      </DescriptionList>
    )
  }
);
