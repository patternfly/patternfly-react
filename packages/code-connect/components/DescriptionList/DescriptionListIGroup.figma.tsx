import { DescriptionListDescription, DescriptionListGroup } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  DescriptionListGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3571',
  {
    props: {
      termLabel: figma.children('Term label'),
      description: figma.string('✏️ Content'),
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for DescriptionList can be found at https://www.patternfly.org/components/description-list
      <DescriptionListGroup>
        {props.termLabel}
        <DescriptionListDescription>
          {props.description}
          {props.children}
        </DescriptionListDescription>
      </DescriptionListGroup>
    )
  }
);
