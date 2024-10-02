import React from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckboxWithToggleText: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-with-text-example"
          key="split-checkbox-with-text"
          aria-label="Select all"
        />
      ]}
      aria-label="Menu toggle with checkbox split button and text"
    >
      10 selected
    </MenuToggle>{' '}
    <MenuToggle
      variant="primary"
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-primary-example"
          key="split-checkbox-primary"
          aria-label="Select all"
        />
      ]}
      aria-label="Primary menu toggle with checkbox split button"
    >
      10 selected
    </MenuToggle>{' '}
    <MenuToggle
      variant="secondary"
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-secondary-example"
          key="split-checkbox-secondary"
          aria-label="Select all"
        />
      ]}
      aria-label="Secondary menu toggle with checkbox split button"
    >
      10 selected
    </MenuToggle>
  </React.Fragment>
);
