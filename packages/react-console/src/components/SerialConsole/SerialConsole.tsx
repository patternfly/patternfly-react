import React from 'react';

import { css } from '@patternfly/react-styles';
import { Button, EmptyState, EmptyStateBody, EmptyStateIcon, Spinner } from '@patternfly/react-core';

import { XTerm, XTermProps } from './XTerm';
import { SerialConsoleActions } from './SerialConsoleActions';

import { constants } from '../common/constants';

import styles from '@patternfly/react-styles/css/components/Consoles/SerialConsole';
import '@patternfly/react-styles/css/components/Consoles/xterm.css';
import '@patternfly/react-styles/css/components/Consoles/SerialConsole.css';

const { CONNECTED, DISCONNECTED, LOADING } = constants;

export interface SerialConsoleProps extends XTermProps {
  /** Initiate connection to backend. In other words, the calling components manages connection state. */
  onConnect: () => void;
  /** Close connection to backend */
  onDisconnect: () => void;
  /** Terminal produced data, like key-press */
  onData: (e: string) => void;
  /** Terminal title has been changed */
  onTitleChanged?: () => void;
  /** Connection status; a value from [''connected'; 'disconnected'; 'loading']. Default is 'loading' for a not matching value. */
  /** The number of columns to resize to */
  cols?: number;
  /** The number of rows to resize to */
  rows?: number;
  fontFamily?: string;
  fontSize?: number;
  status?: string;
  /** Text content rendered inside the Connect button */
  textConnect?: string;
  /** Text content rendered inside the Disconnect button */
  textDisconnect?: string;
  /** Text content rendered inside the Reset button */
  textReset?: string;
  /* Text content rendered inside the EmptyState for when console is disconnnected */
  textDisconnected?: string;
  /* Text content rendered inside the EmptyState for when console is loading */
  textLoading?: string;
  /** A reference object to attach to the SerialConsole. */
  innerRef?: React.RefObject<any>;
}

const SerialConsoleBase: React.FunctionComponent<SerialConsoleProps> = ({
  onConnect,
  onDisconnect,
  onTitleChanged = () => {},
  onData,
  cols,
  rows,
  fontFamily,
  fontSize,
  status = 'loading',
  textConnect = 'Connect',
  textDisconnect,
  textReset,
  textDisconnected = 'Click Connect to open serial console.',
  textLoading = 'Loading ...',
  innerRef
}) => {
  React.useEffect(() => {
    onConnect();
    return () => {
      onDisconnect();
    };
  }, [onConnect, onDisconnect]);

  const onConnectClick = () => {
    onConnect();
    focusTerminal();
  };

  const onDisconnectClick = () => {
    onDisconnect();
    focusTerminal();
  };

  const onResetClick = () => {
    onDisconnect();
    onConnect();
    focusTerminal();
  };

  const focusTerminal = () => {
    innerRef && innerRef.current && innerRef.current.focusTerminal();
  };

  let terminal;
  switch (status) {
    case CONNECTED:
      terminal = (
        <XTerm
          innerRef={innerRef}
          cols={cols}
          rows={rows}
          fontFamily={fontFamily}
          fontSize={fontSize}
          onTitleChanged={onTitleChanged}
          onData={onData}
        />
      );
      break;
    case DISCONNECTED:
      terminal = (
        <EmptyState>
          <EmptyStateBody>{textDisconnected}</EmptyStateBody>
          <Button onClick={onConnectClick}>{textConnect}</Button>
        </EmptyState>
      );
      break;
    case LOADING:
    default:
      terminal = (
        <EmptyState>
          <EmptyStateIcon variant="container" component={Spinner} />
          <EmptyStateBody>{textLoading}</EmptyStateBody>
        </EmptyState>
      );
      break;
  }

  return (
    <>
      {status !== DISCONNECTED && (
        <SerialConsoleActions
          onDisconnect={onDisconnectClick}
          onReset={onResetClick}
          textDisconnect={textDisconnect}
          textReset={textReset}
        />
      )}
      <div className={css(styles.consoleSerial)}>{terminal}</div>
    </>
  );
};
SerialConsoleBase.displayName = 'SerialConsoleBase';
export const SerialConsole = React.forwardRef((props: SerialConsoleProps, ref: React.Ref<HTMLDivElement>) => (
  <SerialConsoleBase innerRef={ref as React.MutableRefObject<any>} {...props} />
));
SerialConsole.displayName = 'SerialConsole';
