import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  DataListAction,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const DataListActions: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
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
            >
              <Dropdown
                popperProps={{ position: 'right' }}
                onSelect={onSelect}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen}
                    onClick={onToggle}
                    variant="plain"
                    aria-label="Data list with actions example kebab toggle"
                    icon={<EllipsisVIcon aria-hidden="true" />}
                  />
                )}
                isOpen={isOpen}
                onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
              >
                <DropdownList>
                  <DropdownItem key="action">Action</DropdownItem>
                  {/* Prevent default onClick functionality for example
                  purposes */}
                  <DropdownItem key="link" to="#" onClick={(event: any) => event.preventDefault()}>
                    Link
                  </DropdownItem>
                  <DropdownItem key="disabled action" isDisabled>
                    Disabled Action
                  </DropdownItem>
                  <DropdownItem key="disabled link" isDisabled to="#" onClick={(event: any) => event.preventDefault()}>
                    Disabled Link
                  </DropdownItem>
                </DropdownList>
              </Dropdown>
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      </DataList>
    </React.Fragment>
  );
};
