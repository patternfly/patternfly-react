import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  DataListCell,
  DataListCheck,
  DataListAction,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const DataListCheckboxes: React.FunctionComponent = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);

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
  const onToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const onSelect3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <DataList aria-label="Checkbox and action data list example">
      <DataListItem aria-labelledby="check-action-item1">
        <DataListItemRow>
          <DataListCheck id="check-item1" aria-labelledby="check-action-item1" name="check-action-check1" />
          <DataListItemCells
            dataListCells={[
              <DataListCell key="primary content">
                <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod.
              </DataListCell>,
              <DataListCell key="secondary content 1">
                Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
              </DataListCell>,
              <DataListCell key="secondary content 2">
                <span>Tertiary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
              </DataListCell>,
              <DataListCell key="more content 1">
                <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
              </DataListCell>,
              <DataListCell key="more content 2">
                <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
              </DataListCell>
            ]}
          />
          <DataListAction
            aria-labelledby="check-action-item1 check-action-action1"
            id="check-action-action1"
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
                  aria-label="Data list with checkboxes, actions and additional cells example kebab toggle 1"
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
      <DataListItem aria-labelledby="check-action-item2">
        <DataListItemRow>
          <DataListCheck id="check-item2" aria-labelledby="check-action-item2" name="check-action-check2" />
          <DataListItemCells
            dataListCells={[
              <DataListCell key="primary content">
                <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod.
              </DataListCell>,
              <DataListCell key="secondary content">
                Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
              </DataListCell>
            ]}
          />
          <DataListAction
            visibility={{ lg: 'hidden' }}
            aria-labelledby="check-action-item2 check-action-action2"
            id="check-action-action2"
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
                  aria-label="Data list with checkboxes, actions and additional cells example kebab toggle 2"
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
          <DataListAction
            visibility={{ default: 'hidden', lg: 'visible' }}
            aria-labelledby="check-action-item2 check-action-action2a"
            id="check-action-action2a"
            aria-label="Actions"
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
      <DataListItem aria-labelledby="check-action-item3">
        <DataListItemRow>
          <DataListCheck id="check-item3" aria-labelledby="check-action-item3" name="check-action-check3" />
          <DataListItemCells
            dataListCells={[
              <DataListCell key="primary content">
                <span id="check-action-item3">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod.
              </DataListCell>,
              <DataListCell key="secondary content">
                Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
              </DataListCell>
            ]}
          />
          <DataListAction
            visibility={{ xl: 'hidden' }}
            aria-labelledby="check-action-item3 check-action-action3"
            id="check-action-action3"
            aria-label="Actions"
          >
            <Dropdown
              popperProps={{ position: 'right' }}
              onSelect={onSelect3}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isOpen3}
                  onClick={onToggle3}
                  variant="plain"
                  aria-label="Data list with checkboxes, actions and additional cells example kebab toggle 3"
                  icon={<EllipsisVIcon aria-hidden="true" />}
                />
              )}
              isOpen={isOpen3}
              onOpenChange={(isOpen: boolean) => setIsOpen3(isOpen)}
            >
              <DropdownList>
                <DropdownItem key="action3">Action</DropdownItem>
                {/* Prevent default onClick functionality for example
                  purposes */}
                <DropdownItem key="link3" to="#" onClick={(event: any) => event.preventDefault()}>
                  Link
                </DropdownItem>
                <DropdownItem key="disabled action3" isDisabled>
                  Disabled Action
                </DropdownItem>
                <DropdownItem key="disabled link3" isDisabled to="#" onClick={(event: any) => event.preventDefault()}>
                  Disabled Link
                </DropdownItem>
              </DropdownList>
            </Dropdown>
          </DataListAction>
          <DataListAction
            visibility={{ default: 'hidden', xl: 'visible' }}
            aria-labelledby="check-action-item3 check-action-action3a"
            id="check-action-action3a"
            aria-label="Actions"
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary">Secondary</Button>
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );
};
