import { FunctionComponent, Fragment } from 'react';
import { MenuToggleCheckbox, MenuToggle } from '@patternfly/react-core';

export const MenuToggleSplitButtonCheckbox: FunctionComponent = () => (
  <Fragment>
    <MenuToggle
      splitButtonOptions={{
        items: [<MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />]
      }}
      aria-label="Menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      variant="primary"
      splitButtonOptions={{
        items: [<MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />]
      }}
      aria-label="Menu toggle with checkbox split button"
    />{' '}
    <MenuToggle
      variant="secondary"
      splitButtonOptions={{
        items: [<MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />]
      }}
      aria-label="Menu toggle with checkbox split button"
    />
  </Fragment>
);
