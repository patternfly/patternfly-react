import React from 'react';
import { MenuToggleAction, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonActionSecondary: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      isDisabled
      variant="secondary"
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-secondary-disabled-example-with-toggle-button"
            key="split-action-secondary-disabled"
            aria-label="Action"
            isDisabled
          >
            Action
          </MenuToggleAction>
        ]
      }}
      aria-label="Menu toggle with action split button"
    />{' '}
    <MenuToggle
      variant="secondary"
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-secondary-example-with-toggle-button"
            key="split-action-secondary"
            aria-label="Action"
          >
            Action
          </MenuToggleAction>
        ]
      }}
      aria-label="Menu toggle with action split button"
    />{' '}
    <MenuToggle
      isExpanded
      variant="secondary"
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-secondary-expanded-example-with-toggle-button"
            key="split-action-secondary-expanded"
            aria-label="Action"
          >
            Action
          </MenuToggleAction>
        ]
      }}
      aria-label="Menu toggle with action split button"
    />
  </React.Fragment>
);
