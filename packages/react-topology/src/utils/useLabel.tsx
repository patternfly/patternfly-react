import * as React from 'react';
import { observer } from 'mobx-react';
import ElementContext from '../utils/ElementContext';
import { GraphElement } from '../types';

export enum LabelPosition {
  right,
  bottom
}

export interface WithLabelProps {
  label?: string; // Defaults to element.getLabel()
  showLabel?: boolean; // Defaults to true
  labelPosition?: LabelPosition; // Defaults to bottom
  truncateLength?: number; // Defaults to 13
  labelIconClass?: string; // Icon to show in label
  labelIconPadding?: number;
}

export const useLabel = (
  getLabelProps?: (element: GraphElement) => WithLabelProps,
  options?: WithLabelProps
): WithLabelProps => {
  const element = React.useContext(ElementContext);
  return {
    label: element.getLabel(),
    showLabel: true,
    labelPosition: LabelPosition.bottom,
    truncateLength: 13,
    labelIconPadding: 4,
    ...(getLabelProps ? getLabelProps(element) : {}),
    ...(options ? options : {})
  };
};

export const withLabel = (getLabelProps?: (element: GraphElement) => WithLabelProps, options?: WithLabelProps) => <
  P extends WithLabelProps
>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Component: React.FC<Omit<P, keyof WithLabelProps>> = props => {
    const statusProps = useLabel(getLabelProps, options);
    return <WrappedComponent {...(props as any)} {...statusProps} />;
  };
  return observer(Component);
};
