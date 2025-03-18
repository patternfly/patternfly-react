import React from 'react';

// Define the IconWrapper component props
export interface IconWrapperProps {
  icon?: React.ReactNode;
  iconSize?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * IconWrapper component - wraps icons with sizing and styling options
 */
export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  iconSize = 'standalone---medium',
  children,
  className = '',
  ...props
}) => {
  // Apply size class based on the iconSize prop
  const getSizeClass = () => {
    switch (iconSize) {
      case 'standalone---small': return 'pf-icon--size-sm';
      case 'standalone---medium': return 'pf-icon--size-md';
      case 'standalone---large': return 'pf-icon--size-lg';
      case 'standalone---xl': return 'pf-icon--size-xl';
      case 'standalone--2xl': return 'pf-icon--size-2xl';
      case 'standalone---3xl': return 'pf-icon--size-3xl';
      // Add other size cases as needed
      default: return 'pf-icon--size-md';
    }
  };

  return (
    <span
      className={`pf-icon-wrapper ${getSizeClass()} ${className}`}
      data-testid="icon-wrapper"
      {...props}
    >
      {icon || children}
    </span>
  );
};

export default IconWrapper;