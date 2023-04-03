import React from 'react';
import {
  Button,
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

export const DataListActions: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const onToggle = (_event: any, isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <DataList aria-label="single action data list example ">
        {!isDeleted && (
          <DataListItem aria-labelledby="single-action-item1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <span id="single-action-item1">Single actionable Primary content</span>
                  </DataListCell>,
                  <DataListCell key="secondary content">Single actionable Secondary content</DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="single-action-item1 single-action-action1"
                id="single-action-action1"
                aria-label="Actions"
              >
                <Button
                  onClick={() => {
                    if (confirm('Are you sure?')) {
                      setIsDeleted(true);
                    }
                  }}
                  variant="primary"
                  key="delete-action"
                >
                  Delete
                </Button>
              </DataListAction>
            </DataListItemRow>
          </DataListItem>
        )}
        <DataListItem aria-labelledby="multi-actions-item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="multi-actions-item1">Multi actions Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">Multi actions Secondary content</DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="multi-actions-item1 multi-actions-action1"
              id="multi-actions-action1"
              aria-label="Actions"
              isPlainButtonAction
            >
              <DropdownDeprecated
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen}
                onSelect={onSelect}
                toggle={<KebabToggle onToggle={onToggle} />}
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
