import React from 'react';
import { Dropdown, DropdownToggle, DropdownToggleAction, DropdownItem } from '@patternfly/react-core/deprecated';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

export const DropdownSplitButtonActionPrimary: React.FunctionComponent = () => {
  const [isActionOpen, setIsActionOpen] = React.useState(false);
  const [isCogOpen, setIsCogOpen] = React.useState(false);

  const onActionToggle = (_event: any, isActionOpen: boolean) => {
    setIsActionOpen(isActionOpen);
  };
  const onCogToggle = (_event: any, isCogOpen: boolean) => {
    setIsCogOpen(isCogOpen);
  };

  const onActionClick = () => {
    window.alert('You selected an action button!');
  };
  const onCogClick = () => {
    window.alert('You selected the Cog!');
  };

  const onActionFocus = () => {
    const element = document.getElementById('toggle-split-button-action-primary');
    element?.focus();
  };
  const onCogFocus = () => {
    const element = document.getElementById('toggle-split-button-cog-primary');
    element?.focus();
  };

  const onActionSelect = () => {
    setIsActionOpen(false);
    onActionFocus();
  };
  const onCogSelect = () => {
    setIsCogOpen(false);
    onCogFocus();
  };

  const dropdownItems = [
    <DropdownItem key="action" component="button" onClick={onActionClick}>
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" component="button" isDisabled onClick={onActionClick}>
      Disabled action
    </DropdownItem>,
    <DropdownItem key="other action" component="button" onClick={onActionClick}>
      Other action
    </DropdownItem>
  ];

  const dropdownIconItems = [
    <DropdownItem key="action" component="button" icon={<CogIcon />} onClick={onActionClick}>
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" component="button" icon={<BellIcon />} isDisabled onClick={onActionClick}>
      Disabled action
    </DropdownItem>,
    <DropdownItem key="other action" component="button" icon={<CubesIcon />} onClick={onActionClick}>
      Other action
    </DropdownItem>
  ];

  return (
    <React.Fragment>
      <Dropdown
        onSelect={onActionSelect}
        toggle={
          <DropdownToggle
            id="toggle-split-button-action-primary"
            splitButtonItems={[
              <DropdownToggleAction key="action" onClick={onActionClick}>
                Action
              </DropdownToggleAction>
            ]}
            toggleVariant="primary"
            splitButtonVariant="action"
            onToggle={onActionToggle}
          />
        }
        isOpen={isActionOpen}
        dropdownItems={dropdownItems}
      />{' '}
      <Dropdown
        onSelect={onCogSelect}
        toggle={
          <DropdownToggle
            id="toggle-split-button-cog-primary"
            splitButtonItems={[
              <DropdownToggleAction key="cog-action" aria-label="Action" onClick={onCogClick}>
                <CogIcon />
              </DropdownToggleAction>
            ]}
            toggleVariant="primary"
            splitButtonVariant="action"
            onToggle={onCogToggle}
          />
        }
        isOpen={isCogOpen}
        dropdownItems={dropdownIconItems}
      />
    </React.Fragment>
  );
};
