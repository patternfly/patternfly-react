import figma from '@figma/code-connect';
import {
  Badge,
  Button,
  ButtonVariant,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  MenuToggleCheckbox,
  MenuToggleElement,
  OverflowMenu,
  OverflowMenuContent,
  OverflowMenuControl,
  OverflowMenuGroup,
  OverflowMenuItem,
  Pagination,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter,
  ToolbarGroup
} from '@patternfly/react-core';

import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';

// Documentation for Toolbar can be found at https://www.patternfly.org/components/toolbar

figma.connect(
  Toolbar,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=8062-17157',
  {
    props: {
      colorVariant: figma.boolean('Transparent Background', {
        true: 'no-background',
        false: undefined
      }),
      bulkSelector: figma.boolean('Bulk Selector', {
        true: (
          <ToolbarItem>
            <Dropdown
              onSelect={() => {}}
              isOpen={false}
              onOpenChange={() => {}}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={false}
                  onClick={() => {}}
                  aria-label="Toolbar stacked example split toggle"
                  splitButtonItems={[
                    <MenuToggleCheckbox
                      key="toolbar-stacked-split-button-checkbox-1"
                      id="toolbar-stacked-split-button-checkbox-1"
                      aria-label="Select all"
                    />
                  ]}
                />
              )}
            >
              <DropdownList>
                <DropdownItem value={0} key="action">
                  Action
                </DropdownItem>
                <DropdownItem
                  value={1}
                  key="link"
                  to="#default-link2"
                  // Prevent the default onClick functionality for example purposes
                  onClick={() => {}}
                >
                  Link
                </DropdownItem>
                <DropdownItem value={2} isDisabled key="disabled action">
                  Disabled Action
                </DropdownItem>
                <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
                  Disabled Link
                </DropdownItem>
              </DropdownList>
            </Dropdown>
          </ToolbarItem>
        ),
        false: undefined
      }),
      filterGroup: figma.boolean('Filter group', {
        true: (
          <>
            <ToolbarFilter
              labels={['New', 'Pending', 'Running', 'Cancelled']}
              deleteLabel={() => {}}
              deleteLabelGroup={() => {}}
              categoryName="Status"
            >
              <Select
                aria-label="Status"
                role="menu"
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    onClick={() => {}}
                    isExpanded={false}
                    style={
                      {
                        width: '140px'
                      } as React.CSSProperties
                    }
                  >
                    Status
                    {['New', 'Pending'].length > 0 && <Badge isRead>{['New', 'Pending'].length}</Badge>}
                  </MenuToggle>
                )}
                onSelect={() => {}}
                selected={false}
                isOpen={false}
                onOpenChange={() => {}}
              >
                <SelectList>
                  <SelectOption hasCheckbox key="statusNew" value="New" isSelected={false}>
                    New
                  </SelectOption>
                  <SelectOption hasCheckbox key="statusPending" value="Pending" isSelected={false}>
                    Pending
                  </SelectOption>
                  <SelectOption hasCheckbox key="statusRunning" value="Running" isSelected={false}>
                    Running
                  </SelectOption>
                  <SelectOption hasCheckbox key="statusCancelled" value="Cancelled" isSelected={false}>
                    Cancelled
                  </SelectOption>
                </SelectList>
              </Select>
            </ToolbarFilter>
            <ToolbarFilter labels={['Low', 'Medium', 'High']} deleteLabel={() => {}} categoryName="Risk">
              <Select
                aria-label="Risk Filter"
                role="menu"
                toggle={(toggleRef) => (
                  <MenuToggle ref={toggleRef} onClick={() => {}} isExpanded={false}>
                    Risk
                  </MenuToggle>
                )}
                onSelect={() => {}}
                selected={false}
                isOpen={false}
                onOpenChange={() => {}}
              >
                <SelectList>
                  <SelectOption value="Low">Low</SelectOption>
                  <SelectOption value="Medium">Medium</SelectOption>
                  <SelectOption value="High">High</SelectOption>
                </SelectList>
              </Select>
            </ToolbarFilter>
          </>
        ),
        false: undefined
      }),
      searchFilter: figma.boolean('Search filter', {
        true: (
          <ToolbarItem>
            <SearchInput aria-label="Search filter input" onChange={() => {}} value={''} onClear={() => {}} />
          </ToolbarItem>
        ),
        false: undefined
      }),
      iconButtonGroup: figma.boolean('Icon button group', {
        true: (
          <ToolbarGroup variant="action-group-plain">
            <ToolbarItem>
              <Button variant="plain" aria-label="edit" icon={<EditIcon />} />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="plain" aria-label="clone" icon={<CloneIcon />} />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="plain" aria-label="sync" icon={<SyncIcon />} />
            </ToolbarItem>
          </ToolbarGroup>
        ),
        false: undefined
      }),
      verticalDivider: figma.boolean('Vertical divider', {
        true: <ToolbarItem variant="separator" />,
        false: undefined
      }),
      buttonGroup: figma.boolean('Button group', {
        true: (
          <>
            <ToolbarItem>
              <Button variant="primary">Button</Button>
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="secondary">Button</Button>
            </ToolbarItem>
          </>
        ),
        false: undefined
      }),
      linkButtons: figma.boolean('Link buttons', {
        true: (
          <>
            <ToolbarItem>
              <Button icon={<PlusCircleIcon />} variant="link">
                Button
              </Button>
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="link">Button</Button>
            </ToolbarItem>
          </>
        ),
        false: undefined
      }),
      overflowMenu: figma.boolean('Overflow menu', {
        true: (
          <ToolbarItem>
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
                  onSelect={() => {}}
                  onOpenChange={() => {}}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      aria-label="Kebab overflow menu"
                      variant="plain"
                      onClick={() => {}}
                      isExpanded={false}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                  isOpen={false}
                >
                  <DropdownList>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem
                      to="#link"
                      // Prevent the default onClick functionality for example purposes
                      onClick={() => {}}
                    >
                      Link
                    </DropdownItem>
                    <DropdownItem isDisabled>Disabled Action</DropdownItem>
                    <DropdownItem isDisabled to="#link">
                      Disabled Link
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
              </OverflowMenuControl>
            </OverflowMenu>
          </ToolbarItem>
        ),
        false: undefined
      }),
      pagination: figma.boolean('Pagination', {
        true: (
          <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
            <Pagination itemCount={523} perPage={20} page={1} onSetPage={() => {}} onPerPageSelect={() => {}} />
          </ToolbarItem>
        ),
        false: undefined
      }),
      filterChips: figma.boolean('Filter chips', {
        true: (
          <>
            <Divider />
            <ToolbarContent>
              <ToolbarGroup variant="filter-group">
                <ToolbarFilter
                  labels={['New', 'Pending']}
                  deleteLabel={() => {}}
                  deleteLabelGroup={() => {}}
                  categoryName="Status"
                >
                  <Select
                    aria-label="Status"
                    role="menu"
                    toggle={(toggleRef) => (
                      <MenuToggle ref={toggleRef} onClick={() => {}} isExpanded={false}>
                        Status
                        {['New', 'Pending'].length > 0 && <Badge isRead>{['New', 'Pending'].length}</Badge>}
                      </MenuToggle>
                    )}
                    onSelect={() => {}}
                    selected={['New', 'Pending']}
                    isOpen={false}
                    onOpenChange={() => {}}
                  >
                    {statusMenuItems}
                  </Select>
                </ToolbarFilter>
                <ToolbarFilter
                  labels={filters.risk}
                  deleteLabel={(category, label) => onDelete(category as string, label as string)}
                  categoryName="Risk"
                >
                  <Select
                    aria-label="Risk"
                    role="menu"
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={onRiskToggle}
                        isExpanded={isRiskExpanded}
                        style={
                          {
                            width: '140px'
                          } as React.CSSProperties
                        }
                      >
                        Risk
                        {filters.risk.length > 0 && <Badge isRead>{filters.risk.length}</Badge>}
                      </MenuToggle>
                    )}
                    onSelect={onRiskSelect}
                    selected={filters.risk}
                    isOpen={isRiskExpanded}
                    onOpenChange={(isOpen) => setIsRiskExpanded(isOpen)}
                  >
                    {riskMenuItems}
                  </Select>
                </ToolbarFilter>
              </ToolbarGroup>
            </ToolbarContent>
          </>
        ),
        false: undefined
      })
    },
    example: (props) => (
      <Toolbar colorVariant={props.colorVariant}>
        <ToolbarContent>
          {props.bulkSelector}
          {props.filterGroup}
          {props.searchFilter}
          {props.iconButtonGroup}
          {props.verticalDivider}
          {props.buttonGroup}
          {props.linkButtons}
          {props.overflowMenu}
          {props.pagination}
        </ToolbarContent>

        {props.filterChips}
      </Toolbar>
    )
  }
);
