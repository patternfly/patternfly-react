import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { DropdownItem } from '../Dropdown';
import { CheckIcon } from '@patternfly/react-icons';
import { Omit } from '../../helpers/typeUtils';

export interface OptionsMenuItemProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onSelect' | 'onClick' | 'onKeyDown' | 'type'> {
  /** Anything which can be rendered as an Options menu item */
  children?: React.ReactNode;
  /** Classes applied to root element of an Options menu item */
  className?: string;
  /** Render Options menu item as selected */
  isSelected?: boolean;
  /** Render Options menu item as disabled option */
  isDisabled?: boolean;
  /** Callback for when this Options menu item is selected */
  onSelect?: (event?: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent) => void;
  /** Unique id of this Options menu item */
  id?: string;
}

export const OptionsMenuItem: React.FunctionComponent<OptionsMenuItemProps> = ({
  children = null as React.ReactNode,
  isSelected = false,
  onSelect = () => null as any,
  id = '',
  isDisabled,
  ...props
}: OptionsMenuItemProps) => {
  return (
    <DropdownItem
      id={id}
      component="button"
      isDisabled={isDisabled}
      onClick={(event: any) => onSelect(event)}
      {...(isDisabled && { 'aria-disabled': true })}
      {...props}
    >
      {children}
      <i className={css(styles.optionsMenuMenuItemIcon)} aria-hidden hidden={!isSelected}>
        <CheckIcon />
      </i>
    </DropdownItem>
  );
};
