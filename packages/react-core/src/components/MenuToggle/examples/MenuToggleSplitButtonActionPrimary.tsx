import React from 'react';
import { MenuToggleAction, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonActionPrimary: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      isDisabled
      variant="primary"
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-primary-disabled-example-with-toggle-button"
            key="split-action-primary-disabled"
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
      variant="primary"
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-primary-example-with-toggle-button"
            key="split-action-primary"
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
      variant="primary"
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-primary-expanded-example-with-toggle-button"
            key="split-action-primary-expanded"
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
