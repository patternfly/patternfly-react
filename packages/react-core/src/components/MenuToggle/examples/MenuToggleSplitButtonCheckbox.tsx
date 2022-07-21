import React from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckbox: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      isDisabled
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-disabled-example"
          key="split-checkbox-disabled"
          aria-label="Select all"
          isDisabled
        />
      ]}
      aria-label="Menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      splitButtonItems={[
        <MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />
      ]}
      aria-label="Menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      isExpanded
      splitButtonItems={[
        <MenuToggleCheckbox
          id="split-button-checkbox-expanded-example"
          key="split-checkbox-expanded"
          aria-label="Select all"
        />
      ]}
      aria-label="Menu toggle with checkbox split button"
    />
  </React.Fragment>
);
