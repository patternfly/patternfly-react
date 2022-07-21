import React from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckboxWithText: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      isDisabled
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-with-text-disabled-example"
          key="split-checkbox-with-text-disabled"
          aria-label="Select all"
          isDisabled
        >
          10 selected
        </MenuToggleCheckbox>
      ]}
      aria-label="Menu toggle with checkbox split button and text"
    />{' '}
    <MenuToggle
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-with-text-example"
          key="split-checkbox-with-text"
          aria-label="Select all"
        >
          10 selected
        </MenuToggleCheckbox>
      ]}
      aria-label="Menu toggle with checkbox split button and text"
    />{' '}
    <MenuToggle
      isExpanded
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-with-text-expanded-example"
          key="split-checkbox-with-text-expanded"
          aria-label="Select all"
        >
          10 selected
        </MenuToggleCheckbox>
      ]}
      aria-label="Menu toggle with checkbox split button and text"
    />
  </React.Fragment>
);
