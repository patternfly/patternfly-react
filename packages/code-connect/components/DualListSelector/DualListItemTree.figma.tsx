import figma from '@figma/code-connect';
import { DualListSelectorList, DualListSelectorTree } from '@patternfly/react-core';

// Documentation for DualListSelectorListItemTree can be found at https://www.patternfly.org/components/dual-list-selector

figma.connect(
  DualListSelectorTree,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116342',
  {
    props: {
      options: `DualListSelectorTreeItemData[] = buildOptions(isChosen, data, false)`
    },
    example: (props) => (
      <DualListSelectorList>
        <DualListSelectorTree data={props.options} onOptionCheck={() => {}} />
      </DualListSelectorList>
    )
  }
);
