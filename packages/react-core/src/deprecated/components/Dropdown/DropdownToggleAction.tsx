import { MouseEvent, ReactNode, Component } from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';

export interface DropdownToggleActionProps {
  /** Additional classes added to the DropdownToggleAction */
  className?: string;
  /** Flag to show if the action button is disabled */
  isDisabled?: boolean;
  /** A callback for when the action button is clicked */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Element to be rendered inside the <button> */
  children?: ReactNode;
  /** Id of the action button */
  id?: string;
  /** Aria-label of the action button */
  'aria-label'?: string;
}

class DropdownToggleAction extends Component<DropdownToggleActionProps> {
  static displayName = 'DropdownToggleAction';

  static defaultProps: DropdownToggleActionProps = {
    className: '',
    isDisabled: false,
    onClick: () => {}
  };

  render() {
    const { id, className, onClick, isDisabled, children, ...props } = this.props;

    return (
      <button
        id={id}
        className={css(styles.dropdownToggleButton, className)}
        onClick={onClick}
        {...(isDisabled && { disabled: true, 'aria-disabled': true })}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export { DropdownToggleAction };
