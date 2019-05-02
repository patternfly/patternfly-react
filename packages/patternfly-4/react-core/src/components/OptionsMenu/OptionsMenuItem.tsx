import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';
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
  onSelect(event: React.MouseEvent<HTMLButtonElement>|React.KeyboardEvent): void;
  /** Unique id of this Options menu item */
  id?: string;
}

export class OptionsMenuItem extends React.Component<OptionsMenuItemProps> {

  static defaultProps = {
    children: null as any,
    className: '',
    isSelected: false,
    isDisabled: false,
    id: '',
  };

  constructor(props: OptionsMenuItemProps) {
    super(props);
  }

  onKeyDown = (event:React.KeyboardEvent) => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.keyCode === KEY_CODES.TAB) return;
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ENTER) {
      this.props.onSelect(event);
    }
  };

  render() {
    const { onSelect, isDisabled, isSelected, className, children, id, ...props } = this.props;
    return <li>
      <button
        className={css(styles.optionsMenuMenuItem, isDisabled && getModifier(styles, 'disabled'), className)}
        aria-disabled={isDisabled}
        onClick={onSelect}
        onKeyDown={this.onKeyDown}
        aria-selected={isSelected}
        id={id}
        {...props}>
        {children}
        <i className={css(styles.optionsMenuMenuItemIcon)} aria-hidden={true} hidden={!isSelected}><CheckIcon/></i>
      </button>
    </li>
  }
}
