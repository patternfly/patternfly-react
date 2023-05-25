import * as React from 'react';
import { DropdownItem, DropdownItemProps } from '../Dropdown';
import { OverflowMenuContext } from './OverflowMenuContext';

export interface OverflowMenuDropdownItemProps extends Omit<DropdownItemProps, 'ref'> {
  /** Indicates when a dropdown item shows and hides the corresponding list item */
  isShared?: boolean;
  /** Identifies the component in the dropdown onSelect callback */
  itemId?: string | number;
}

export const OverflowMenuDropdownItem: React.FunctionComponent<OverflowMenuDropdownItemProps> = ({
  children,
  isShared = false,
  itemId,
  ...additionalProps
}: OverflowMenuDropdownItemProps) => (
  <OverflowMenuContext.Consumer>
    {(value) =>
      (!isShared || value.isBelowBreakpoint) && (
        <DropdownItem component="button" value={itemId} {...additionalProps}>
          {children}
        </DropdownItem>
      )
    }
  </OverflowMenuContext.Consumer>
);
OverflowMenuDropdownItem.displayName = 'OverflowMenuDropdownItem';
