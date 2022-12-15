import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';

export const DropdownSplitButtonProgressCheckbox: React.FunctionComponent = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);

  const onToggle1 = (isOpen: boolean) => {
    setIsOpen1(isOpen);
  };

  const onToggle2 = (isOpen: boolean) => {
    setIsOpen2(isOpen);
  };

  const onFocus = () => {
    const element = document.getElementById('toggle-split-button-progress-text');
    element.focus();
  };

  const onChange1 = (checked: boolean) => {
    setIsChecked1(checked);
  };

  const onChange2 = (checked: boolean) => {
    setIsChecked2(checked);
  };

  const onSelect1 = () => {
    setIsOpen1(false);
    onFocus();
  };

  const onSelect2 = () => {
    setIsOpen2(false);
    onFocus();
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled href="www.google.com">
      Disabled link
    </DropdownItem>,
    <DropdownItem
      key="disabled action"
      isAriaDisabled
      component="button"
      tooltip="Tooltip for disabled item"
      tooltipProps={{ position: 'top' }}
    >
      Disabled action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated link">Separated link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated action
    </DropdownItem>
  ];

  return (
    <>
      <Dropdown
        onSelect={onSelect1}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                onChange={onChange1}
                isChecked={isChecked1}
                isInProgress={isChecked1}
                isDisabled={isChecked1}
                id="split-button-progress-toggle-checkbox"
                key="split-progress-checkbox"
                aria-label="Select all"
              />
            ]}
            onToggle={onToggle1}
            id="toggle-split-button-progress"
          />
        }
        isOpen={isOpen1}
        dropdownItems={dropdownItems}
      />{' '}
      <Dropdown
        onSelect={onSelect2}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                onChange={onChange2}
                isChecked={isChecked2}
                isInProgress={isChecked2}
                isDisabled={isChecked2}
                id="split-button-progress-text-checkbox"
                key="split-progress-checkbox"
                aria-label="Select all"
              >
                10 selected
              </DropdownToggleCheckbox>
            ]}
            onToggle={onToggle2}
            id="toggle-split-button-progress-text"
          />
        }
        isOpen={isOpen2}
        dropdownItems={dropdownItems}
      />
    </>
  );
};
