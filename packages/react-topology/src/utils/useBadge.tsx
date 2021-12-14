import * as React from 'react';
import { observer } from 'mobx-react';
import ElementContext from '../utils/ElementContext';
import { GraphElement } from '../types';

export enum BadgeLocation {
  inner,
  below
}

export interface WithBadgeProps {
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
}

export const useBadge = (
  getBadgeProps?: (element: GraphElement) => WithBadgeProps,
  options?: WithBadgeProps
): WithBadgeProps => {
  const element = React.useContext(ElementContext);
  return {
    ...(options ? options : {}),
    ...(getBadgeProps ? getBadgeProps(element) : {})
  };
};

export const withBadge = (getBadgeProps?: (element: GraphElement) => WithBadgeProps, options?: WithBadgeProps) => <
  P extends WithBadgeProps
>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Component: React.FC<Omit<P, keyof WithBadgeProps>> = props => {
    const statusProps = useBadge(getBadgeProps, options);
    return <WrappedComponent {...(props as any)} {...statusProps} />;
  };
  return observer(Component);
};
