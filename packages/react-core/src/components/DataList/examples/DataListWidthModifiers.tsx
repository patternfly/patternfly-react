import React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  DataListItemRow,
  Text,
  TextVariants,
  TextContent,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
/* eslint-disable camelcase */
import global_Color_100 from '@patternfly/react-tokens/dist/esm/global_Color_100';
import global_BackgroundColor_200 from '@patternfly/react-tokens/dist/esm/global_BackgroundColor_200';
import global_BorderColor_100 from '@patternfly/react-tokens/dist/esm/global_BorderColor_100';
import global_BorderWidth_sm from '@patternfly/react-tokens/dist/esm/global_BorderWidth_sm';

export const DataListWidthModifiers: React.FunctionComponent = () => {
  const [show, setShow] = React.useState(true);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

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

  const previewPlaceholder = {
    display: 'block',
    width: '100%',
    padding: '.25rem .5rem',
    color: global_Color_100.var,
    backgroundColor: global_BackgroundColor_200.var,
    border: `${global_BorderWidth_sm.var} ${global_BorderColor_100.var} solid`
  };

  return (
    <>
      <div key="example-1">
        <TextContent>
          <Text component={TextVariants.h4}>Default fitting - example 1</Text>
        </TextContent>
        <DataList aria-label="Width modifier data list example 1">
          <DataListItem aria-labelledby="width-ex1-item1">
            <DataListItemRow>
              <DataListCheck aria-labelledby="width-ex1-item1" name="width-ex1-item1" />
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="default">
                    <div style={previewPlaceholder}>
                      <b id="width-ex1-item1">default</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell key="default2">
                    <div style={previewPlaceholder}>
                      <b>default</b>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </div>
      <div key="example-2">
        <TextContent>
          <Text component={TextVariants.h4}>Flex modifiers - example 2</Text>
        </TextContent>
        <DataList aria-label="Width modifier data list example 2">
          <DataListItem aria-labelledby="width-ex2-item1">
            <DataListItemRow>
              <DataListCheck aria-labelledby="width-ex2-item1" name="width-ex2-item1" />
              <DataListItemCells
                dataListCells={[
                  <DataListCell width={2} key="width 2">
                    <div style={previewPlaceholder}>
                      <b id="width-ex2-item1">width 2</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell width={4} key="width 4">
                    <div style={previewPlaceholder}>
                      <b>width 4</b>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="width-ex2-item1 width-ex2-action1"
                id="width-ex2-action1"
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
                      aria-label="Data list width modifiers example kebab toggle 1"
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
                    <DropdownItem
                      key="disabled link"
                      isDisabled
                      to="#"
                      onClick={(event: any) => event.preventDefault()}
                    >
                      Disabled Link
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
              </DataListAction>
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </div>
      <div key="example-3">
        <TextContent>
          <Text component={TextVariants.h4}>Flex modifiers - example 3</Text>
        </TextContent>
        <DataList aria-label="Width modifier data list example 3">
          <DataListItem aria-labelledby="width-ex3-item1" isExpanded={show}>
            <DataListItemRow>
              <DataListToggle
                isExpanded={show}
                id="width-ex3-toggle1"
                aria-controls="width-ex3-expand1"
                onClick={() => setShow(!show)}
              />
              <DataListCheck aria-labelledby="width-ex3-item1" name="width-ex3-item1" />
              <DataListItemCells
                dataListCells={[
                  <DataListCell width={5} key="width 5">
                    <div style={previewPlaceholder}>
                      <b id="width-ex3-item1">width 5</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell width={2} key="width 2">
                    <div style={previewPlaceholder}>
                      <b>width 2</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell key="default">
                    <div style={previewPlaceholder}>default</div>
                  </DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="width-ex3-item1 width-ex3-action1"
                id="width-ex3-action1"
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
                      aria-label="Data list width modifiers example kebab toggle 2"
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
                    <DropdownItem
                      key="disabled link2"
                      isDisabled
                      to="#"
                      onClick={(event: any) => event.preventDefault()}
                    >
                      Disabled Link
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
              </DataListAction>
            </DataListItemRow>
            <DataListContent aria-label="Primary Content Details" id="width-ex3-expand1" isHidden={!show}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </DataListContent>
          </DataListItem>
        </DataList>
      </div>
    </>
  );
};
