import React from 'react';
import {
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';

export const DataListMixedExpandable: React.FunctionComponent = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [expanded, setExpanded] = React.useState(['m-ex-toggle1', 'm-ex-toggle3']);

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

  const toggle = (id) => {
    const index = expanded.indexOf(id);
    const newExpanded =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    setExpanded(newExpanded);
  };

  return (
    <React.Fragment>
      <DataList aria-label="Mixed expandable data list example">
        <DataListItem aria-labelledby="m-ex-item1" isExpanded={expanded.includes('m-ex-toggle1')}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => toggle('m-ex-toggle1')}
              isExpanded={expanded.includes('m-ex-toggle1')}
              id="m-ex-toggle1"
              aria-controls="m-ex-expand1"
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell isIcon key="icon">
                  <CodeBranchIcon />
                </DataListCell>,
                <DataListCell key="primary content">
                  <div id="m-ex-item1">Primary content</div>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  <a href="#">link</a>
                </DataListCell>,
                <DataListCell key="secondary content">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </DataListCell>,
                <DataListCell key="secondary content 2">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="m-ex-item1 m-ex-action1"
              id="m-ex-action1"
              aria-label="Actions"
              isPlainButtonAction
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
                    aria-label="Data list mixed expandable example kebab toggle 1"
                  >
                    <EllipsisVIcon aria-hidden="true" />
                  </MenuToggle>
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
          <DataListContent
            aria-label="First mixed expandable content details"
            id="m-ex-expand1"
            isHidden={!expanded.includes('m-ex-toggle1')}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </DataListContent>
        </DataListItem>
        <DataListItem aria-labelledby="m-ex-item2">
          <DataListItemRow>
            <DataListToggle
              id="m-ex-toggle2"
              buttonProps={{
                disabled: true,
                'aria-hidden': 'true',
                style: { visibility: 'hidden' }
              }}
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell isIcon key="icon">
                  <CodeBranchIcon />
                </DataListCell>,
                <DataListCell key="secondary content">
                  <div id="m-ex-item2">Secondary content</div>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </DataListCell>,
                <DataListCell key="secondary content 2">
                  <span>Lorem ipsum dolor sit amet.</span>
                </DataListCell>,
                <DataListCell key="secondary content3">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="m-ex-item2 mex-action2"
              id="m-ex-action2"
              aria-label="Actions"
              isPlainButtonAction
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
                    aria-label="Data list mixed expandable example kebab toggle 2"
                  >
                    <EllipsisVIcon aria-hidden="true" />
                  </MenuToggle>
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
        <DataListItem aria-labelledby="m-ex-item3" isExpanded={expanded.includes('m-ex-toggle3')}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => toggle('m-ex-toggle3')}
              isExpanded={expanded.includes('m-ex-toggle3')}
              id="m-ex-toggle3"
              aria-controls="m-ex-expand3"
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell isIcon key="icon">
                  <CodeBranchIcon />
                </DataListCell>,
                <DataListCell key="tertiary content">
                  <div id="m-ex-item3">Tertiary content</div>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </DataListCell>,
                <DataListCell key="secondary content">
                  <span>Lorem ipsum dolor sit amet.</span>
                </DataListCell>,
                <DataListCell key="secondary content 2">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="m-ex-item3 m-ex-action3"
              id="m-ex-action3"
              aria-label="Actions"
              isPlainButtonAction
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
                    aria-label="Data list mixed expandable example kebab toggle 3"
                  >
                    <EllipsisVIcon aria-hidden="true" />
                  </MenuToggle>
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
          </DataListItemRow>
          <DataListContent
            aria-label="Third mixed expandable content details"
            id="m-ex-expand3"
            isHidden={!expanded.includes('m-ex-toggle3')}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </DataListContent>
        </DataListItem>
      </DataList>
    </React.Fragment>
  );
};
