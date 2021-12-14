import * as React from 'react';
import { observer } from 'mobx-react';
import ElementContext from '../utils/ElementContext';
import { EdgeTerminalType, GraphElement, NodeStatus } from '../types';

export interface WithTerminalsProps {
  startTerminalType?: EdgeTerminalType;
  startTerminalClass?: string;
  startTerminalStatus?: NodeStatus;
  endTerminalType?: EdgeTerminalType;
  endTerminalClass?: string;
  endTerminalStatus?: NodeStatus;
  tag?: string;
  tagClass?: string;
  tagStatus?: NodeStatus;
}

export const useTerminals = (
  getConnectorProps?: (element: GraphElement) => WithTerminalsProps,
  options?: WithTerminalsProps
): WithTerminalsProps => {
  const element = React.useContext(ElementContext);
  return {
    ...(options ? options : {}),
    ...(getConnectorProps ? getConnectorProps(element) : {})
  };
};

export const withTerminals = (
  getConnectorProps?: (element: GraphElement) => WithTerminalsProps,
  options?: WithTerminalsProps
) => <P extends WithTerminalsProps>(WrappedComponent: React.ComponentType<P>) => {
  const Component: React.FC<Omit<P, keyof WithTerminalsProps>> = props => {
    const statusProps = useTerminals(getConnectorProps, options);
    return <WrappedComponent {...(props as any)} {...statusProps} />;
  };
  return observer(Component);
};
