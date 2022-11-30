import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItemProps, MenuItem } from '../../../components/Menu';

interface CommonSelectOptionProps extends Omit<MenuItemProps, 'ref'> {
  /** Anything which can be rendered in a select option */
  children?: React.ReactNode;
  /** Classes applied to root element of select option */
  className?: string;
  /** Identifies the component in the Select onSelect callback */
  itemId?: any;
  /** Indicates the option has a checkbox */
  hasCheck?: boolean;
  /** Indicates the option is disabled */
  isDisabled?: boolean;
  /** Indicates the option is selected */
  isSelected?: boolean;
  /** Indicates the option is focused */
  isFocused?: boolean;
}

type ConditionalSelectOptionProps =
  | {
      /** Target navigation link */
      to?: string;
      /** Flyout menu. Disallowed if nav link is defined */
      flyoutMenu?: never;
    }
  | {
      /** Target navigation link. Disallowed if flyoutMenu is defined */
      to?: never;
      /** Flyout menu */
      flyoutMenu?: React.ReactElement;
    };

export type SelectOptionProps = CommonSelectOptionProps & ConditionalSelectOptionProps;

export const SelectOption: React.FunctionComponent<MenuItemProps> = ({
  children,
  className,
  ...props
}: SelectOptionProps) => (
  <MenuItem className={css(className)} {...props}>
    {children}
  </MenuItem>
);
SelectOption.displayName = 'SelectOption';
