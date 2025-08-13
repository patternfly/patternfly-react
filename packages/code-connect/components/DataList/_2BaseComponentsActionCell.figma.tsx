import figma from '@figma/code-connect';
import { DataListAction } from '@patternfly/react-core';

// Documentation for DataListItemRow can be found at https://www.patternfly.org/components/data-list

figma.connect(
  DataListAction,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6596-33965',
  {
    example: () => (
      <DataListAction aria-labelledby="item1 action1" id="action1" aria-label="Actions">
        'Action'
      </DataListAction>
    )
  }
);
