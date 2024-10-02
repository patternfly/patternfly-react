import React from 'react';
import { MenuToggleAction, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonAction: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle
      splitButtonItems={[
        <MenuToggleAction id="split-button-action-example-with-toggle-button" key="split-action" aria-label="Action">
          Action
        </MenuToggleAction>
      ]}
      aria-label="Menu toggle with action split button"
    />{' '}
    <MenuToggle
      variant="primary"
      splitButtonItems={[
        <MenuToggleAction
          id="split-button-action-primary-example-with-toggle-button"
          key="split-action-primary"
          aria-label="Action"
        >
          Action
        </MenuToggleAction>
      ]}
      aria-label="Menu toggle with action split button"
    />{' '}
    <MenuToggle
      variant="secondary"
      splitButtonItems={[
        <MenuToggleAction
          id="split-button-action-secondary-example-with-toggle-button"
          key="split-action-secondary"
          aria-label="Action"
        >
          Action
        </MenuToggleAction>
      ]}
      aria-label="Menu toggle with action split button"
    />
  </React.Fragment>
);
