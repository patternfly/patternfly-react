import figma from '@figma/code-connect';
import { DataListItem, DataListItemRow } from '@patternfly/react-core';

// Documentation for DataListItemRow can be found at https://www.patternfly.org/components/data-list

figma.connect(
  DataListItemRow,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6649-96947',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <DataListItem>
        <DataListItemRow rowid="<row-id>">{props.children}</DataListItemRow>
      </DataListItem>
    )
  }
);
