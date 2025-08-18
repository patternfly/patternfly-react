import figma from '@figma/code-connect';
import { DescriptionListGroup, DescriptionListDescription } from '@patternfly/react-core';

// Documentation for DescriptionListGroup can be found at https://www.patternfly.org/components/description-list

figma.connect(
  DescriptionListGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3571',
  {
    props: {
      term: figma.children('Term label'),
      description: figma.string('✏️ Content')
    },

    example: (props) => (
      <DescriptionListGroup>
        {props.term}
        <DescriptionListDescription>{props.description}</DescriptionListDescription>
      </DescriptionListGroup>
    )
  }
);
