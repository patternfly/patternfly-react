import React from 'react';
import {
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

export const DataListClickableRows: React.FunctionComponent = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [selectedDataListItemId, setSelectedDataListItemId] = React.useState('');

  const onToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const onSelect1 = () => {
    setIsOpen1(!isOpen1);
  };

  const onToggle2 = () => {
    setIsOpen2(!isOpen2);
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
        aria-label="clickable data list example"
        selectedDataListItemId={selectedDataListItemId}
        onSelectDataListItem={onSelectDataListItem}
        onSelectableRowChange={handleInputChange}
      >
        <DataListItem aria-labelledby="clickable-action-item1" id="item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="clickable-action-item1">Single actionable Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">Single actionable Secondary content</DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="clickable-action-item1 clickable-action-action1"
              id="clickable-action-action1"
              aria-label="Actions"
            >
              <Dropdown
                popperProps={{ position: 'right' }}
                onSelect={onSelect1}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen1}
                    onClick={onToggle1}
                    variant="plain"
                    aria-label="Data list clickable rows example kebab toggle 1"
                    icon={<EllipsisVIcon aria-hidden="true" />}
                  />
                )}
                isOpen={isOpen1}
                onOpenChange={(isOpen: boolean) => setIsOpen1(isOpen)}
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
        <DataListItem aria-labelledby="clickable-actions-item2" id="item2">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="clickable-actions-item2">clickable actions Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">clickable actions Secondary content</DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="clickable-actions-item2 clickable-actions-action2"
              id="clickable-actions-action2"
              aria-label="Actions"
            >
              <Dropdown
                popperProps={{ position: 'right' }}
                onSelect={onSelect2}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen2}
                    onClick={onToggle2}
                    variant="plain"
                    aria-label="Data list clickable rows example kebab toggle 2"
                    icon={<EllipsisVIcon aria-hidden="true" />}
                  />
                )}
                isOpen={isOpen2}
                onOpenChange={(isOpen: boolean) => setIsOpen2(isOpen)}
              >
                <DropdownList>
                  <DropdownItem key="action2">Action</DropdownItem>
                  {/* Prevent default onClick functionality for example
                  purposes */}
                  <DropdownItem key="link2" to="#" onClick={(event: any) => event.preventDefault()}>
                    Link
                  </DropdownItem>
                  <DropdownItem key="disabled action2" isDisabled>
                    Disabled Action
                  </DropdownItem>
                  <DropdownItem key="disabled link2" isDisabled to="#" onClick={(event: any) => event.preventDefault()}>
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
