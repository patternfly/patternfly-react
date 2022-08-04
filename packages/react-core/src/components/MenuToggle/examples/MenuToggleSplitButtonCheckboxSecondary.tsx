import React from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckboxSecondary: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      isDisabled
      variant="secondary"
      splitButtonOptions={{
        items: [
          <MenuToggleCheckbox
            id="split-button-checkbox-secondary-disabled-example"
            key="split-checkbox-secondary-disabled"
            aria-label="Select all"
            isDisabled
          >
            10 selected
          </MenuToggleCheckbox>
        ]
      }}
      aria-label="Secondary menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      variant="secondary"
      splitButtonOptions={{
        items: [
          <MenuToggleCheckbox
            id="split-button-checkbox-secondary-example"
            key="split-checkbox-secondary"
            aria-label="Select all"
          >
            10 selected
          </MenuToggleCheckbox>
        ]
      }}
      aria-label="Secondary menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      isExpanded
      variant="secondary"
      splitButtonOptions={{
        items: [
          <MenuToggleCheckbox
            id="split-button-checkbox-secondary-expanded-example"
            key="split-checkbox-secondary-expanded"
            aria-label="Select all"
          >
            10 selected
          </MenuToggleCheckbox>
        ]
      }}
      aria-label="Secondary menu toggle with checkbox split button"
    />
  </React.Fragment>
);
