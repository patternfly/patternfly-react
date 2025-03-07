import React from 'react';

export interface IconWrapperProps {
  icon?: React.ReactNode;
  iconSize?: string;
  children?: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon, iconSize = 'standalone---medium', children, ...props
}) => (
  <span className={`pf-icon-wrapper ${iconSize}`} {...props}>
    {icon || children}
  </span>
);