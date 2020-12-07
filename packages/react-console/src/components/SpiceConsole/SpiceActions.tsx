import React from 'react';
import { Dropdown, DropdownItem, DropdownToggle } from '@patternfly/react-core';

export interface SpiceActionsProps extends React.HTMLProps<HTMLDivElement> {
  /** Callback for when Ctrl+Alt+Delete item is selected */
  onCtrlAltDel?: () => void;
  /** Text for the Dropdown Ctrl+Alt+Delety item */
  textCtrlAltDel?: string;
  /** Text for the Dropdown toggle button */
  textSendShortcut?: string;
}
export const SpiceActions: React.FunctionComponent<SpiceActionsProps> = ({
  textSendShortcut = 'Send Key',
  textCtrlAltDel = 'Ctrl+Alt+Del',
  onCtrlAltDel
}: SpiceActionsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dropdown
      id="console-send-shortcut"
      onSelect={() => {
        setIsOpen(!isOpen);
        onCtrlAltDel();
      }}
      isOpen={isOpen}
      toggle={
        <DropdownToggle onToggle={isDropdownOpen => setIsOpen(isDropdownOpen)}>{textSendShortcut}</DropdownToggle>
      }
      dropdownItems={[<DropdownItem key="ctrl-alt-delete">{textCtrlAltDel}</DropdownItem>]}
    />
  );
};
SpiceActions.displayName = 'SpiceActions';
