import React from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckbox: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      splitButtonItems={[
        <MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />
      ]}
      aria-label="Menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      variant="primary"
      splitButtonItems={[
        <MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />
      ]}
      aria-label="Menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      variant="secondary"
      splitButtonItems={[
        <MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />
      ]}
      aria-label="Menu toggle with checkbox split button"
    />
  </React.Fragment>
);
