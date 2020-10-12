import React from 'react';
import { Button } from '@patternfly/react-core';

export interface SerialConsoleActionsProps extends React.HTMLProps<HTMLDivElement> {
  onDisconnect: () => void;
  onReset: () => void;
  textDisconnect?: string;
  textReset?: string;
}

export const SerialConsoleActions: React.FunctionComponent<SerialConsoleActionsProps> = ({
  textDisconnect = 'Disconnect',
  textReset = 'Reset',
  ...props
}: SerialConsoleActionsProps) => (
  <div className="pf-c-console__actions-serial">
    <Button variant="secondary" onClick={props.onDisconnect}>
      {textDisconnect}
    </Button>
    <Button variant="secondary" onClick={props.onReset}>
      {textReset}
    </Button>
  </div>
);
SerialConsoleActions.displayName = 'SerialConsoleActions';
