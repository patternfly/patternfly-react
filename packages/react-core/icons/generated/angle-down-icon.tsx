import React from 'react';
import { IconProps } from '../IconProps';

export const AngleDownIcon = ({
  className = '',
  title,
  ...props
}: IconProps) => {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      {title && <title>{title}</title>}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
};
