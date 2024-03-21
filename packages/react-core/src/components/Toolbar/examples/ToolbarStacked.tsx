import {
  useState,
  type FunctionComponent,
  type ChangeEvent as ReactChangeEvent,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type Ref,
  type CSSProperties
} from 'react';
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
  MenuToggleCheckbox,
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
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const ToolbarStacked: FunctionComponent = () => {
  // toggle group - three option menus with labels, two icon buttons, Kebab menu - right aligned
  // pagination - right aligned
  const resourceOptions = ['All resources', 'Deployment', 'Pod'];
  const statusOptions = ['New', 'Pending', 'Running', 'Cancelled'];

  const [kebabIsOpen, setKebabIsOpen] = useState(false);
  const [resourceIsExpanded, setResourceIsExpanded] = useState(false);
  const [resourceSelected, setResourceSelected] = useState('');
  const [statusIsExpanded, setStatusIsExpanded] = useState(false);
  const [statusSelected, setStatusSelected] = useState('');
  const [isSplitButtonDropdownOpen, setIsSplitButtonDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const onKebabToggle = () => {
    setKebabIsOpen(!kebabIsOpen);
  };

  const onResourceToggle = () => {
    setResourceIsExpanded(!resourceIsExpanded);
  };

  const onResourceSelect = (_event: ReactChangeEvent | ReactMouseEvent, selection: string) => {
    setResourceSelected(selection);
    setResourceIsExpanded(false);
  };

  const onResourceSelectDropdown = () => {
    setResourceIsExpanded(false);
  };

  const onStatusToggle = () => {
    setStatusIsExpanded(!statusIsExpanded);
  };

  const onStatusSelect = (_event: ReactChangeEvent | ReactMouseEvent, selection: string) => {
    setStatusSelected(selection);
    setStatusIsExpanded(false);
  };

  const onSetPage = (_event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent, pageNumber: number) => {
    setPage(pageNumber);
  };

  const onPerPageSelect = (
    _event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent,
    perPage: number,
    page: number
  ) => {
    setPage(page);
    setPerPage(perPage);
  };

  const onSplitButtonToggle = () => {
    setIsSplitButtonDropdownOpen(!isSplitButtonDropdownOpen);
  };

  const onSplitButtonSelect = () => {
    setIsSplitButtonDropdownOpen(!isSplitButtonDropdownOpen);
  };

  const dropdownItems = (
    <>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem
        to="#default-link2"
        // Prevent the default onClick functionality for example purposes
        onClick={(ev: any) => ev.preventDefault()}
      >
        Link
      </DropdownItem>
      <DropdownItem isDisabled>Disabled Action</DropdownItem>
      <DropdownItem isDisabled to="#default-link4">
        Disabled Link
      </DropdownItem>
    </>
  );
  const splitButtonDropdownItems = (
    <>
      <DropdownItem value={0} key="action">
        Action
      </DropdownItem>
      <DropdownItem
        value={1}
        key="link"
        to="#default-link2"
        // Prevent the default onClick functionality for example purposes
        onClick={(ev: any) => ev.preventDefault()}
      >
        Link
      </DropdownItem>
      <DropdownItem value={2} isDisabled key="disabled action">
        Disabled Action
      </DropdownItem>
      <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
        Disabled Link
      </DropdownItem>
    </>
  );

  const toggleGroupItems = (
    <>
      <ToolbarItem variant="label" id="stacked-example-resource-select">
        Resource
      </ToolbarItem>
      <ToolbarItem>
        <Select
          toggle={(toggleRef: Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={() => onResourceToggle()}
              isExpanded={resourceIsExpanded}
              style={
                {
                  width: '150px'
                } as CSSProperties
              }
            >
              {resourceSelected || 'Resource'}
            </MenuToggle>
          )}
          onSelect={onResourceSelect}
          selected={resourceSelected}
          onOpenChange={(isOpen) => setResourceIsExpanded(isOpen)}
          isOpen={resourceIsExpanded}
          aria-labelledby="stacked-example-resource-select"
        >
          <SelectList>
            {resourceOptions.map((option, index) => (
              <SelectOption key={index} value={option}>
                {option}
              </SelectOption>
            ))}
          </SelectList>
        </Select>
      </ToolbarItem>
      <ToolbarItem variant="label" id="stacked-example-status-select">
        Status
      </ToolbarItem>
      <ToolbarItem>
        <Select
          toggle={(toggleRef: Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={() => onStatusToggle()}
              isExpanded={statusIsExpanded}
              style={
                {
                  width: '150px'
                } as CSSProperties
              }
            >
              {statusSelected || 'Status'}
            </MenuToggle>
          )}
          onSelect={onStatusSelect}
          onOpenChange={(isOpen) => setStatusIsExpanded(isOpen)}
          selected={statusSelected}
          isOpen={statusIsExpanded}
        >
          <SelectList>
            {statusOptions.map((option, index) => (
              <SelectOption key={index} value={option}>
                {option}
              </SelectOption>
            ))}
          </SelectList>
        </Select>
      </ToolbarItem>
    </>
  );

  const firstRowItems = (
    <>
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
                  onOpenChange={(isOpen: boolean) => setKebabIsOpen(isOpen)}
                  toggle={(toggleRef: Ref<MenuToggleElement>) => (
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
    </>
  );

  const secondRowItems = (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarItem variant="bulk-select">
            <Dropdown
              onSelect={onSplitButtonSelect}
              isOpen={isSplitButtonDropdownOpen}
              onOpenChange={(isOpen: boolean) => setIsSplitButtonDropdownOpen(isOpen)}
              toggle={(toggleRef: Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isSplitButtonDropdownOpen}
                  onClick={onSplitButtonToggle}
                  aria-label="Toolbar stacked example split toggle"
                  splitButtonOptions={{
                    items: [
                      <MenuToggleCheckbox
                        key="toolbar-stacked-split-button-checkbox-1"
                        id="toolbar-stacked-split-button-checkbox-1"
                        aria-label="Select all"
                      />
                    ]
                  }}
                />
              )}
            >
              <DropdownList>{splitButtonDropdownItems}</DropdownList>
            </Dropdown>
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
    </>
  );

  return (
    <>
      {firstRowItems}
      <Divider />
      {secondRowItems}
    </>
  );
};
