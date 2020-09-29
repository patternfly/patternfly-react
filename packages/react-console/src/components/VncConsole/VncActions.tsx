import React from 'react';
import { Dropdown, DropdownItem, DropdownToggle, Button } from '@patternfly/react-core';

export interface VncActionProps {
  onDisconnect: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCtrlAltDel: () => void;

  textCtrlAltDel?: string;
  textSendShortcut?: string;
  textDisconnect?: string;

  /** VNC console additional action elements */
  additionalButtons?: React.ReactNode[];
}
export const VncActions: React.FunctionComponent<VncActionProps> = ({
  textSendShortcut = 'Send Key',
  textCtrlAltDel = 'Ctrl+Alt+Del',
  textDisconnect = 'Disconnect',
  onCtrlAltDel = undefined,
  onDisconnect,
  additionalButtons = []
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toolbar = (
    <div className="pf-c-console__actions-vnc">
      {additionalButtons}
      <Dropdown
        id="pf-c-console__send-shortcut"
        onSelect={() => setIsOpen(false)}
        toggle={
          <DropdownToggle id="pf-c-console__actions-vnc-toggle-id" onToggle={() => setIsOpen(!isOpen)}>
            {textSendShortcut}
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={[
          <DropdownItem onClick={onCtrlAltDel} key="ctrl-alt-delete">
            {textCtrlAltDel}
          </DropdownItem>
        ]}
      />
      <Button onClick={onDisconnect}>{textDisconnect}</Button>
    </div>
  );

  return toolbar;
};
VncActions.displayName = 'VncActions';
