import React from 'react';
import {
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListWrapModifier
} from '@patternfly/react-core';

export const DataListControllingText: React.FunctionComponent = () => (
  <DataList aria-label="Controlling text data list example">
    <DataListItem aria-labelledby="controlling-text-item1">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content" wrapModifier={DataListWrapModifier.breakWord}>
              <span id="controlling-text-item1">Primary content</span>
            </DataListCell>,
            <DataListCell key="secondary content" wrapModifier={DataListWrapModifier.truncate}>
              Really really really really really really really really really really really really really really long
              description that should be truncated before it ends
            </DataListCell>
          ]}
        />
      </DataListItemRow>
    </DataListItem>
  </DataList>
);
