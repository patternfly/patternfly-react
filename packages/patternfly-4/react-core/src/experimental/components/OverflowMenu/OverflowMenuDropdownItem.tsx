import * as React from 'react';
import { DropdownItem } from '../../../components/Dropdown';
import { OverflowMenuContext } from './OverflowMenuContext';

export interface OverflowMenuDropdownItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  isShared?: boolean;
}

export const OverflowMenuDropdownItem: React.SFC<OverflowMenuDropdownItemProps> = ({ children, isShared }) => (
  <OverflowMenuContext.Consumer>
    {value =>
      (!isShared || value.isBelowBreakpoint) && (
        <DropdownItem component="button"> {children} </DropdownItem>
      )
    }
  </OverflowMenuContext.Consumer>
);
