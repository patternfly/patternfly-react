import { MouseEvent, ReactNode, Component } from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';

export interface MenuToggleActionProps {
  /** Additional classes added to the MenuToggleAction */
  className?: string;
  /** Flag to show if the action button is disabled */
  isDisabled?: boolean;
  /** A callback for when the action button is clicked */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Element to be rendered inside the <button> */
  children?: ReactNode;
  /** Id of the action button */
  id?: string;
}

class MenuToggleAction extends Component<MenuToggleActionProps> {
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

export { MenuToggleAction };
