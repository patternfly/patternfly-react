import * as React from 'react';
import { observer } from 'mobx-react';
import ElementContext from '../utils/ElementContext';
import { GraphElement } from '../types';

export interface WithStatusProps {
  showStatusDecorator?: boolean;
  statusDecoratorTooltip?: React.ReactNode;
  onStatusDecoratorClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>, element: GraphElement) => void;
}

export const useStatus = (getElementStatus: (element: GraphElement) => WithStatusProps): WithStatusProps => {
  const element = React.useContext(ElementContext);
  return getElementStatus ? getElementStatus(element) : {};
};

export const withStatus = (getElementStatus: (element: GraphElement) => WithStatusProps) => <P extends WithStatusProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Component: React.FC<Omit<P, keyof WithStatusProps>> = props => {
    const statusProps = useStatus(getElementStatus);
    return <WrappedComponent {...(props as any)} {...statusProps} />;
  };
  return observer(Component);
};
