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
  DropdownItem,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';

export const DataListMixedExpandable: React.FunctionComponent = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [expanded, setExpanded] = React.useState(['m-ex-toggle1', 'm-ex-toggle3']);

  const onToggle1 = isOpen1 => {
    setIsOpen1(isOpen1);
  };

  const onSelect1 = () => {
    setIsOpen1(!isOpen1);
  };

  const onToggle2 = isOpen2 => {
    setIsOpen2(isOpen2);
  };

  const onSelect2 = () => {
    setIsOpen2(!isOpen2);
  };

  const onToggle3 = isOpen3 => {
    setIsOpen3(isOpen3);
  };

  const onSelect3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggle = id => {
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
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen1}
                onSelect={onSelect1}
                toggle={<KebabToggle onToggle={onToggle1} />}
                dropdownItems={[
                  <DropdownItem key="link">Link</DropdownItem>,
                  <DropdownItem key="action" component="button">
                    Action
                  </DropdownItem>,
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>
                ]}
              />
            </DataListAction>
          </DataListItemRow>
          <DataListContent
            aria-label="First expandable content details"
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
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen2}
                onSelect={onSelect2}
                toggle={<KebabToggle onToggle={onToggle2} />}
                dropdownItems={[
                  <DropdownItem key="link">Link</DropdownItem>,
                  <DropdownItem key="action" component="button">
                    Action
                  </DropdownItem>,
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>
                ]}
              />
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
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen3}
                onSelect={onSelect3}
                toggle={<KebabToggle onToggle={onToggle3} />}
                dropdownItems={[
                  <DropdownItem key="link">Link</DropdownItem>,
                  <DropdownItem key="action" component="button">
                    Action
                  </DropdownItem>,
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>
                ]}
              />
            </DataListAction>
          </DataListItemRow>
          <DataListContent
            aria-label="Third expandable content details"
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
