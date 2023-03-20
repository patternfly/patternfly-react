import React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  DataListAction
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core/deprecated';

export const DataListSelectableRows: React.FunctionComponent = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [selectedDataListItemId, setSelectedDataListItemId] = React.useState('');

  const onToggle1 = (_event: any, isOpen1: boolean) => {
    setIsOpen1(isOpen1);
  };

  const onSelect1 = () => {
    setIsOpen1(!isOpen1);
  };

  const onToggle2 = (_event: any, isOpen2: boolean) => {
    setIsOpen2(isOpen2);
  };

  const onSelect2 = () => {
    setIsOpen2(!isOpen2);
  };

  const onSelectDataListItem = (_event: React.MouseEvent | React.KeyboardEvent, id: string) => {
    setSelectedDataListItemId(id);
  };

  const handleInputChange = (_event: React.FormEvent<HTMLInputElement>, id: string) => {
    setSelectedDataListItemId(id);
  };

  return (
    <React.Fragment>
      <DataList
        aria-label="selectable data list example"
        selectedDataListItemId={selectedDataListItemId}
        onSelectDataListItem={onSelectDataListItem}
        onSelectableRowChange={handleInputChange}
      >
        <DataListItem aria-labelledby="selectable-action-item1" id="item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="selectable-action-item1">Single actionable Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">Single actionable Secondary content</DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="selectable-action-item1 selectable-action-action1"
              id="selectable-action-action1"
              aria-label="Actions"
              isPlainButtonAction
            >
              <DropdownDeprecated
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen1}
                onSelect={onSelect1}
                toggle={<KebabToggle onToggle={onToggle1} />}
                dropdownItems={[
                  <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
                  <DropdownItemDeprecated key="action" component="button">
                    Action
                  </DropdownItemDeprecated>,
                  <DropdownItemDeprecated key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItemDeprecated>
                ]}
              />
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="selectable-actions-item2" id="item2">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="selectable-actions-item2">Selectable actions Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">Selectable actions Secondary content</DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="selectable-actions-item2 selectable-actions-action2"
              id="selectable-actions-action2"
              aria-label="Actions"
              isPlainButtonAction
            >
              <DropdownDeprecated
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen2}
                onSelect={onSelect2}
                toggle={<KebabToggle onToggle={onToggle2} />}
                dropdownItems={[
                  <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
                  <DropdownItemDeprecated key="action" component="button">
                    Action
                  </DropdownItemDeprecated>,
                  <DropdownItemDeprecated key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItemDeprecated>
                ]}
              />
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      </DataList>
    </React.Fragment>
  );
};
