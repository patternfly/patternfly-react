import React from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckboxPrimary: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      isDisabled
      variant="primary"
      splitButtonOptions={{
        items: [
          <MenuToggleCheckbox
            id="split-button-checkbox-primary-disabled-example"
            key="split-checkbox-primary-disabled"
            aria-label="Select all"
            isDisabled
          >
            10 selected
          </MenuToggleCheckbox>
        ]
      }}
      aria-label="Primary menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      variant="primary"
      splitButtonOptions={{
        items: [
          <MenuToggleCheckbox
            id="split-button-checkbox-primary-example"
            key="split-checkbox-primary"
            aria-label="Select all"
          >
            10 selected
          </MenuToggleCheckbox>
        ]
      }}
      aria-label="Primary menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      isExpanded
      variant="primary"
      splitButtonOptions={{
        items: [
          <MenuToggleCheckbox
            id="split-button-checkbox-primary-expanded-example"
            key="split-checkbox-expanded"
            aria-label="Select all"
          >
            10 selected
          </MenuToggleCheckbox>
        ]
      }}
      aria-label="Primary menu toggle with checkbox split button"
    />
  </React.Fragment>
);
