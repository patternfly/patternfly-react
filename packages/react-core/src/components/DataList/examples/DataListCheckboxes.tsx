import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  DataListCell,
  DataListCheck,
  DataListAction
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core/deprecated';

export const DataListCheckboxes: React.FunctionComponent = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);

  const onToggle1 = (_event: any, isOpen1: boolean) => {
    setIsOpen1(isOpen1);
  };

  const onSelect1 = () => {
    setIsOpen1(!isOpen1);
  };

  const onToggle2 = (_event: any, isOpen2: boolean) => {
    setIsOpen2(isOpen2);
  };

  const onSelect2 = () => {
    setIsOpen2(!isOpen2);
  };
  const onToggle3 = (_event: any, isOpen3: boolean) => {
    setIsOpen3(isOpen3);
  };

  const onSelect3 = () => {
    setIsOpen3(!isOpen3);
  };
  return (
    <DataList aria-label="Checkbox and action data list example">
      <DataListItem aria-labelledby="check-action-item1">
        <DataListItemRow>
          <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1" />
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
            isPlainButtonAction
          >
            <DropdownDeprecated
              isPlain
              position={DropdownPosition.right}
              isOpen={isOpen1}
              onSelect={onSelect1}
              toggle={<KebabToggle onToggle={onToggle1} />}
              dropdownItems={[
                <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
                <DropdownItemDeprecated key="action" component="button">
                  Action
                </DropdownItemDeprecated>,
                <DropdownItemDeprecated key="disabled link" isDisabled>
                  Disabled Link
                </DropdownItemDeprecated>
              ]}
            />
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
      <DataListItem aria-labelledby="check-action-item2">
        <DataListItemRow>
          <DataListCheck aria-labelledby="check-action-item2" name="check-action-check2" />
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
            isPlainButtonAction
          >
            <DropdownDeprecated
              isPlain
              position={DropdownPosition.right}
              isOpen={isOpen2}
              onSelect={onSelect2}
              toggle={<KebabToggle onToggle={onToggle2} />}
              dropdownItems={[
                <DropdownItemDeprecated key="pri-action2" component="button">
                  Primary
                </DropdownItemDeprecated>,
                <DropdownItemDeprecated key="sec-action2" component="button">
                  Secondary
                </DropdownItemDeprecated>
              ]}
            />
          </DataListAction>
          <DataListAction
            visibility={{ default: 'hidden', lg: 'visible' }}
            aria-labelledby="check-action-item2 check-action-action2"
            id="check-action-action2"
            aria-label="Actions"
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
      <DataListItem aria-labelledby="check-action-item3">
        <DataListItemRow>
          <DataListCheck aria-labelledby="check-action-item3" name="check-action-check3" />
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
            id="check-actiokn-action3"
            aria-label="Actions"
            isPlainButtonAction
          >
            <DropdownDeprecated
              isPlain
              position={DropdownPosition.right}
              isOpen={isOpen3}
              onSelect={onSelect3}
              toggle={<KebabToggle onToggle={onToggle3} />}
              dropdownItems={[
                <DropdownItemDeprecated key="pri-action3" component="button">
                  Primary
                </DropdownItemDeprecated>,
                <DropdownItemDeprecated key="sec1-action3" component="button">
                  Secondary
                </DropdownItemDeprecated>,
                <DropdownItemDeprecated key="sec2-action3" component="button">
                  Secondary
                </DropdownItemDeprecated>,
                <DropdownItemDeprecated key="sec3-action3" component="button">
                  Secondary
                </DropdownItemDeprecated>
              ]}
            />
          </DataListAction>
          <DataListAction
            visibility={{ default: 'hidden', xl: 'visible' }}
            aria-labelledby="check-action-item3 check-action-action3"
            id="check-action-action3"
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
