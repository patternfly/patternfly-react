import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';

import styles from '@patternfly/react-styles/css/components/Consoles/SerialConsole';

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
  <div className={css(styles.consoleActionsSerial)}>
    <Button variant="secondary" onClick={props.onDisconnect}>
      {textDisconnect}
    </Button>
    <Button variant="secondary" onClick={props.onReset}>
      {textReset}
    </Button>
  </div>
);
SerialConsoleActions.displayName = 'SerialConsoleActions';
