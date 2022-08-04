import React from 'react';
import { MenuToggleAction, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonAction: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      isDisabled
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-disabled-example-with-toggle-button"
            key="split-action-disabled"
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
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction id="split-button-action-example-with-toggle-button" key="split-action" aria-label="Action">
            Action
          </MenuToggleAction>
        ]
      }}
      aria-label="Menu toggle with action split button"
    />{' '}
    <MenuToggle
      isExpanded
      splitButtonOptions={{
        variant: 'action',
        items: [
          <MenuToggleAction
            id="split-button-action-expanded-example-with-toggle-button"
            key="split-action-expanded"
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
