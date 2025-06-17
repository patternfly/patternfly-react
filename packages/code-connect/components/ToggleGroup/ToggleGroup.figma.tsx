import figma from '@figma/code-connect';
import { ToggleGroup } from '@patternfly/react-core';

figma.connect(
  ToggleGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7644-56919',
  {
    props: {
      // enum
      size: figma.enum('Size', {
        Default: undefined,
        Compact: 'compact'
      }),

      // nested props
      leftItem: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text')
      }),
      middleItem1: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text')
      }),
      middleItem2: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text')
      }),
      rightItem: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text')
      }),

      children: figma.children('*')
    },
    example: (props) => <ToggleGroup aria-label="Toggle group example">{props.children}</ToggleGroup>
  }
);
