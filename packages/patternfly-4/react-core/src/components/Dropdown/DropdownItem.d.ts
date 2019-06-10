import * as React from 'react';

export interface DropdownItemProps extends React.HTMLProps<HTMLAnchorElement> {
  /** Anything which can be rendered as dropdown item */
  children?: React.ReactNode; 
  /** Classes applied to root element of dropdown item */
  className?: string; 
  /** Indicates which component will be used as dropdown item */
  component?: React.ReactType | string;
  /** Flag if this is for the app launcher */
  isAppLauncher?: boolean; 
  /** Role for the item */
  role?: string; 
  /** Render dropdown item as disabled option */
  isDisabled?: boolean; 
  /** Forces display of the hover state of the element */
  isHovered?: boolean; 
  /** Default hyperlink location */
  href?: string; 
  index?: number; 
  context?: {
    keyHandler?: (index: number, direction: string) => void,
    sendRef?: (index: number, ref: any, isDisabled: boolean) => void
  };
  /** Callback for click event */
  onClick?: () => void; 
}