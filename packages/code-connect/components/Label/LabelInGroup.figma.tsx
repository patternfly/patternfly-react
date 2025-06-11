import figma from '@figma/code-connect';
import { LabelGroup } from '@patternfly/react-core';

figma.connect(
  LabelGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-1075',
  {
    props: {
      // string
      categoryName: figma.string('Label group name'),
      isCollapsed: figma.boolean('Has collapsed labels'),
      children: figma.children('Label')
    },
    // Documentation for LabelGroup can be found at https://www.patternfly.org/components/label-group
    example: (props) => (
      <LabelGroup categoryName={props.categoryName} numLabels={5}>
        {props.children}
      </LabelGroup>
    )
  }
);
