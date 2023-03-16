import React from 'react';
import {
  Button,
  ButtonVariant,
  Select,
  SelectOption,
  SelectOptionObject,
  SelectVariant,
  Pagination,
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem,
  Divider,
  MenuToggle,
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
import { Dropdown as DropdownNext, DropdownItem as DropdownItemNext, DropdownList } from '@patternfly/react-core/next';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const ToolbarStacked: React.FunctionComponent = () => {
  // toggle group - three option menus with labels, two icon buttons, Kebab menu - right aligned
  // pagination - right aligned
  const resourceOptions = [
    { value: 'All resources', disabled: false },
    { value: 'Deployment', disabled: false },
    { value: 'Pod', disabled: false }
  ];

  const statusOptions = [
    { value: 'Running', disabled: false },
    { value: 'New', disabled: false },
    { value: 'Pending', disabled: false },
    { value: 'Cancelled', disabled: false }
  ];

  const [kebabIsOpen, setKebabIsOpen] = React.useState(false);
  const [resourceIsExpanded, setResourceIsExpanded] = React.useState(false);
  const [resourceSelected, setResourceSelected] = React.useState<string | SelectOptionObject>();
  const [statusIsExpanded, setStatusIsExpanded] = React.useState(false);
  const [statusSelected, setStatusSelected] = React.useState<string | SelectOptionObject>();
  const [splitButtonDropdownIsOpen, setSplitButtonDropdownIsOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(20);

  const onKebabToggle = () => {
    setKebabIsOpen(!kebabIsOpen);
  };

  const onResourceToggle = (_event: any, isExpanded: boolean) => {
    setResourceIsExpanded(isExpanded);
  };

  const onResourceSelect = (_event: React.ChangeEvent | React.MouseEvent, selection: string | SelectOptionObject) => {
    setResourceSelected(selection);
    setResourceIsExpanded(false);
  };

  const onResourceSelectDropdown = (event: React.MouseEvent<Element, MouseEvent>| undefined) => {
    setResourceSelected(event?.target);
    setResourceIsExpanded(false);
  };

  const onStatusToggle = (_event: any, isExpanded: boolean) => {
    setStatusIsExpanded(isExpanded);
  };

  const onStatusSelect = (_event: React.ChangeEvent | React.MouseEvent, selection: string | SelectOptionObject) => {
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
    <DropdownItemNext key="link">Link</DropdownItemNext>,
    <DropdownItemNext key="action" component="button">
      Action
    </DropdownItemNext>,
    <DropdownItemNext key="disabled link" isDisabled>
      Disabled Link
    </DropdownItemNext>,
    <DropdownItemNext key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItemNext>,
    <Divider key="separator" />,
    <DropdownItemNext key="separated link">Separated Link</DropdownItemNext>,
    <DropdownItemNext key="separated action" component="button">
      Separated Action
    </DropdownItemNext>
  ];

  const splitButtonDropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled>
      Disabled Link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItem>
  ];

  const toggleGroupItems = (
    <React.Fragment>
      <ToolbarItem variant="label" id="stacked-example-resource-select">
        Resource
      </ToolbarItem>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={onResourceToggle}
          onSelect={onResourceSelect}
          selections={resourceSelected}
          isOpen={resourceIsExpanded}
          aria-labelledby="stacked-example-resource-select"
        >
          {resourceOptions.map((option, index) => (
            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
          ))}
        </Select>
      </ToolbarItem>
      <ToolbarItem variant="label" id="stacked-example-status-select">
        Status
      </ToolbarItem>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={onStatusToggle}
          onSelect={onStatusSelect}
          selections={statusSelected}
          isOpen={statusIsExpanded}
          aria-labelledby="stacked-example-status-select"
        >
          {statusOptions.map((option, index) => (
            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
          ))}
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
              <DropdownNext
                   onSelect={onResourceSelectDropdown}
                   toggle={toggleRef => (
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
                 </DropdownNext>
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
            <Dropdown
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
