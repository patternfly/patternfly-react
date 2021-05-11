import React, { useContext } from 'react';
import { LogViewerContext } from './LogViewerContext';
import { Button, ToolbarItem, ToolbarItemProps } from '@patternfly/react-core';

export interface LoggerCustomControlProps extends ToolbarItemProps {
  /** Icon for the user defined button */
  children?: React.ReactNode;
  /** Callback func. with exposure for the data. */
  onClick?: (event?: any, value?: string[]) => void;
}

export const LogViewerCustomControl: React.FunctionComponent<LoggerCustomControlProps> = ({
  children = null,
  onClick = () => {},
  ...props
}) => {
  const loggerState = useContext(LogViewerContext);

  const onCustomClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(event, loggerState.parsedData);
  };

  return (
    <ToolbarItem {...props}>
      <Button onClick={onCustomClick} variant="control">
        {children}
      </Button>
    </ToolbarItem>
  );
};
LogViewerCustomControl.displayName = 'LogViewerCustomControl';
