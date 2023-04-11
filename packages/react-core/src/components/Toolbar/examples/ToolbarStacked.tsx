import React from 'react';
import {
  Button,
  ButtonVariant,
  Select,
  SelectList,
  SelectOption,
  Pagination,
  Dropdown,
  DropdownItem,
  DropdownList,
  Divider,
  MenuToggle,
  MenuToggleElement,
  OverflowMenu,
  OverflowMenuContent,
  OverflowMenuControl,
  OverflowMenuGroup,
  OverflowMenuItem,
  Toolbar,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarItem
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem as DropdownItemDeprecated
} from '@patternfly/react-core/deprecated';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const ToolbarStacked: React.FunctionComponent = () => {
  // toggle group - three option menus with labels, two icon buttons, Kebab menu - right aligned
  // pagination - right aligned
  const resourceOptions = ['All resources', 'Deployment', 'Pod'];
  const statusOptions = ['New', 'Pending', 'Running', 'Cancelled'];

  const [kebabIsOpen, setKebabIsOpen] = React.useState(false);
  const [resourceIsExpanded, setResourceIsExpanded] = React.useState(false);
  const [resourceSelected, setResourceSelected] = React.useState('');
  const [statusIsExpanded, setStatusIsExpanded] = React.useState(false);
  const [statusSelected, setStatusSelected] = React.useState('');
  const [splitButtonDropdownIsOpen, setSplitButtonDropdownIsOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(20);

  const onKebabToggle = () => {
    setKebabIsOpen(!kebabIsOpen);
  };

  const onResourceToggle = () => {
    setResourceIsExpanded(!resourceIsExpanded);
  };

  const onResourceSelect = (_event: React.ChangeEvent | React.MouseEvent, selection: string) => {
    setResourceSelected(selection);
    setResourceIsExpanded(false);
  };

  const onResourceSelectDropdown = () => {
    setResourceIsExpanded(false);
  };

  const onStatusToggle = () => {
    setStatusIsExpanded(!statusIsExpanded);
  };

  const onStatusSelect = (_event: React.ChangeEvent | React.MouseEvent, selection: string) => {
    setStatusSelected(selection);
    setStatusIsExpanded(false);
  };

  const onSetPage = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, pageNumber: number) => {
    setPage(pageNumber);
  };

  const onPerPageSelect = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    perPage: number,
    page: number
  ) => {
    setPage(page);
    setPerPage(perPage);
  };

  const onSplitButtonToggle = (_event: any, isOpen: boolean) => {
    setSplitButtonDropdownIsOpen(isOpen);
  };

  const onSplitButtonSelect = () => {
    setSplitButtonDropdownIsOpen(!splitButtonDropdownIsOpen);
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled>
      Disabled Link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItem>,
    <Divider key="separator" />,
    <DropdownItem key="separated link">Separated Link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated Action
    </DropdownItem>
  ];

  const splitButtonDropdownItems = [
    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="action" component="button">
      Action
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled link" isDisabled>
      Disabled Link
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItemDeprecated>
  ];

  const toggleGroupItems = (
    <React.Fragment>
      <ToolbarItem variant="label" id="stacked-example-resource-select">
        Resource
      </ToolbarItem>
      <ToolbarItem>
        <Select
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={() => onResourceToggle()}
              isExpanded={resourceIsExpanded}
              style={
                {
                  width: '150px'
                } as React.CSSProperties
              }
            >
              {resourceSelected || 'Resource'}
            </MenuToggle>
          )}
          onSelect={onResourceSelect}
          selected={resourceSelected}
          onOpenChange={isOpen => setResourceIsExpanded(isOpen)}
          isOpen={resourceIsExpanded}
          aria-labelledby="stacked-example-resource-select"
        >
          <SelectList>
            {resourceOptions.map((option, index) => (
              <SelectOption key={index} itemId={option}>{option}</SelectOption>
            ))}
          </SelectList>
        </Select>
      </ToolbarItem>
      <ToolbarItem variant="label" id="stacked-example-status-select">
        Status
      </ToolbarItem>
      <ToolbarItem>
        <Select
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={() => onStatusToggle()}
              isExpanded={statusIsExpanded}
              style={
                {
                  width: '150px'
                } as React.CSSProperties
              }
            >
              {statusSelected || 'Status'}
            </MenuToggle>
          )}
          onSelect={onStatusSelect}
          onOpenChange={isOpen => setStatusIsExpanded(isOpen)}
          selected={statusSelected}
          isOpen={statusIsExpanded}
        >
          <SelectList>
            {statusOptions.map((option, index) => (
              <SelectOption key={index} itemId={option}>{option}</SelectOption>
            ))}
          </SelectList>
        </Select>
      </ToolbarItem>
    </React.Fragment>
  );

  const firstRowItems = (
    <React.Fragment>
      <Toolbar>
        <ToolbarContent>
          <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="lg">
            {toggleGroupItems}
          </ToolbarToggleGroup>
          <ToolbarItem variant="overflow-menu">
            <OverflowMenu breakpoint="2xl">
              <OverflowMenuContent>
                <OverflowMenuGroup groupType="button">
                  <OverflowMenuItem>
                    <Button variant={ButtonVariant.primary}>Primary</Button>
                  </OverflowMenuItem>
                  <OverflowMenuItem>
                    <Button variant={ButtonVariant.secondary}>Secondary</Button>
                  </OverflowMenuItem>
                </OverflowMenuGroup>
              </OverflowMenuContent>
              <OverflowMenuControl hasAdditionalOptions>
                <Dropdown
                  onSelect={onResourceSelectDropdown}
                  onOpenChange={(isOpen) => setKebabIsOpen(isOpen)}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      aria-label="Kebab overflow menu"
                      variant="plain"
                      onClick={onKebabToggle}
                      isExpanded={kebabIsOpen}
                    >
                      <EllipsisVIcon />
                    </MenuToggle>
                  )}
                  isOpen={kebabIsOpen}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </OverflowMenuControl>
            </OverflowMenu>
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    </React.Fragment>
  );

  const secondRowItems = (
    <React.Fragment>
      <Toolbar>
        <ToolbarContent>
          <ToolbarItem variant="bulk-select">
            <DropdownDeprecated
              onSelect={onSplitButtonSelect}
              toggle={
                <DropdownToggle
                  id="stacked-example-toggle"
                  splitButtonItems={[
                    <DropdownToggleCheckbox id="example-checkbox-1" key="split-checkbox" aria-label="Select all" />
                  ]}
                  onToggle={onSplitButtonToggle}
                />
              }
              isOpen={splitButtonDropdownIsOpen}
              dropdownItems={splitButtonDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
            <Pagination
              itemCount={37}
              perPage={perPage}
              page={page}
              onSetPage={onSetPage}
              widgetId="pagination-options-menu-top"
              onPerPageSelect={onPerPageSelect}
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {firstRowItems}
      <Divider />
      {secondRowItems}
    </React.Fragment>
  );
};
