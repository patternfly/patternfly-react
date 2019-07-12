import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { CheckIcon } from '@patternfly/react-icons';
import { KEY_CODES } from '../../helpers';
import { Omit } from '../../helpers/typeUtils';

export interface OptionsMenuItemProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'onSelect' | 'onClick' | 'onKeyDown' | 'type'>{
  /** Anything which can be rendered as an Options menu item */
  children?: React.ReactNode;
  /** Classes applied to root element of an Options menu item */
  className?: string;
  /** Render Options menu item as selected */
  isSelected?: boolean;
  /** Render Options menu item as disabled option */
  isDisabled?: boolean;
  /** Callback for when this Options menu item is selected */
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>|React.KeyboardEvent) => void;
  /** Unique id of this Options menu item */
  id?: string;
}


export const OptionsMenuItem: React.FunctionComponent<OptionsMenuItemProps> = ({
  children = null as React.ReactNode,
  className = '',
  isSelected = false,
  isDisabled = false,
  onSelect = () => null as any,
  id = '',
  ...props
}: OptionsMenuItemProps) => {

  const onKeyDown = (event: React.KeyboardEvent) => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.keyCode === KEY_CODES.TAB) {
      return;
    }
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ENTER) {
      onSelect(event);
    }
  };

  return (
    <li>
      <button
        className={css(styles.optionsMenuMenuItem, isDisabled && getModifier(styles, 'disabled'), className)}
        aria-disabled={isDisabled}
        onClick={onSelect}
        onKeyDown={onKeyDown}
        aria-selected={isSelected}
        id={id}
        {...props}>
        {children}
        <i className={css(styles.optionsMenuMenuItemIcon)} aria-hidden hidden={!isSelected}><CheckIcon/></i>
      </button>
    </li>
  );
};
