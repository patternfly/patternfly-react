import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';

export const DataListPlain: React.FunctionComponent = () => (
  <DataList aria-label="Plain data list example" isPlain>
    <DataListItem aria-labelledby="plain-item1">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="plain-item1">Primary content</span>
            </DataListCell>,
            <DataListCell key="secondary content">Secondary content</DataListCell>
          ]}
        />
      </DataListItemRow>
    </DataListItem>
    <DataListItem aria-labelledby="plain-item2">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell isFilled={false} key="secondary content fill">
              <span id="plain-item2">Secondary content (pf-m-no-fill)</span>
            </DataListCell>,
            <DataListCell isFilled={false} alignRight key="secondary content align">
              Secondary content (pf-m-align-right pf-m-no-fill)
            </DataListCell>
          ]}
        />
      </DataListItemRow>
    </DataListItem>
  </DataList>
);
