import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';

export interface MenuToggleActionProps {
  /** Additional classes added to the MenuToggleAction */
  className?: string;
  /** Flag to show if the action button is disabled */
  isDisabled?: boolean;
  /** A callback for when the action button is clicked */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Element to be rendered inside the <button> */
  children?: React.ReactNode;
  /** Id of the action button */
  id?: string;
}

export class MenuToggleAction extends React.Component<MenuToggleActionProps> {
  static displayName = 'MenuToggleAction';
  static defaultProps: MenuToggleActionProps = {
    className: '',
    isDisabled: false,
    onClick: () => {}
  };

  render() {
    const { id, className, onClick, isDisabled, children, ...props } = this.props;

    return (
      <button
        id={id}
        className={css(styles.menuToggleButton, className)}
        onClick={onClick}
        type="button"
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    );
  }
}
