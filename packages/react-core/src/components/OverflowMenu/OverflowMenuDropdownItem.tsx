import * as React from 'react';
import { DropdownItem, DropdownItemProps } from '../../next/components/Dropdown';
import { OverflowMenuContext } from './OverflowMenuContext';

export interface OverflowMenuDropdownItemProps extends Omit<DropdownItemProps, 'ref'> {
  /** Indicates when a dropdown item shows and hides the corresponding list item */
  isShared?: boolean;
}

export const OverflowMenuDropdownItem: React.FunctionComponent<OverflowMenuDropdownItemProps> = ({
  children,
  isShared = false,
  ...additionalProps
}: OverflowMenuDropdownItemProps) => (
  <OverflowMenuContext.Consumer>
    {value =>
      (!isShared || value.isBelowBreakpoint) && (
        <DropdownItem component="button" {...additionalProps}>
          {children}
        </DropdownItem>
      )
    }
  </OverflowMenuContext.Consumer>
);
OverflowMenuDropdownItem.displayName = 'OverflowMenuDropdownItem';
