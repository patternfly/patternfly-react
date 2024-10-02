import React from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckboxWithText: React.FunctionComponent = () => (
  <React.Fragment>
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
      variant="primary"
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-primary-example"
          key="split-checkbox-primary"
          aria-label="Select all"
        >
          10 selected
        </MenuToggleCheckbox>
      ]}
      aria-label="Primary menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      variant="secondary"
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-secondary-example"
          key="split-checkbox-secondary"
          aria-label="Select all"
        >
          10 selected
        </MenuToggleCheckbox>
      ]}
      aria-label="Secondary menu toggle with checkbox split button"
    />
  </React.Fragment>
);
