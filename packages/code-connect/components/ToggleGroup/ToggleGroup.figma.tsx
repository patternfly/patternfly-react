import figma from '@figma/code-connect';
import { ToggleGroup } from '@patternfly/react-core';

// Documentation for ToggleGroup can be found at https://www.patternfly.org/components/toggle-group

figma.connect(
  ToggleGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7644-56919',
  {
    props: {
      // enum
      isCompact: figma.enum('Size', {
        Default: undefined,
        Compact: 'compact'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <ToggleGroup aria-label="Toggle group example" isCompact={props.isCompact}>
        {props.children}
      </ToggleGroup>
    )
  }
);
