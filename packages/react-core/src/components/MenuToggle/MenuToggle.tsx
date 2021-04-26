import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import { BadgeProps } from '../Badge';

export interface MenuToggleProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /** Content rendered inside the toggle */
  children?: React.ReactNode;
  /** Additional classes added to the toggle */
  className?: string;
  /** Flag indicating the toggle has expanded styling */
  isExpanded?: boolean;
  /** Flag indicating the toggle is disabled */
  isDisabled?: boolean;
  /** Flag indicating the toggle should have primary styling */
  isPrimary?: boolean;
  /** Flag indicating the toggle should have plain styling and only render the children. Incompatible with icon and badge properties. Pass an icon via children to make an icon toggle. */
  isPlain?: boolean;
  /** Optional icon rendered inside the toggle, before the children content */
  icon?: React.ReactNode;
  /** Optional badge rendered inside the toggle, after the children content */
  badge?: BadgeProps | React.ReactNode;
}

export class MenuToggle extends React.Component<MenuToggleProps> {
  displayName = 'MenuToggle';
  static defaultProps = {
    className: '',
    isExpanded: false,
    isDisabled: false,
    isPrimary: false,
    isPlain: false
  };

  render() {
    const { children, className, icon, badge, isExpanded, isDisabled, isPrimary, isPlain, ...props } = this.props;

    const content = (
      <React.Fragment>
        {icon && <span className={css(styles.menuToggleIcon)}>{icon}</span>}
        <span className="pf-c-menu-toggle__text">{children}</span>
        {badge && <span className={css(styles.menuToggleCount)}>{badge}</span>}
        <span className={css(styles.menuToggleControls)}>
          <span className={css(styles.menuToggleToggleIcon)}>
            <CaretDownIcon aria-hidden />
          </span>
        </span>
      </React.Fragment>
    );
    return (
      <button
        className={css(
          styles.menuToggle,
          isExpanded && styles.modifiers.expanded,
          isPrimary && styles.modifiers.primary,
          isPlain && styles.modifiers.plain,
          className
        )}
        type="button"
        aria-expanded={false}
        {...(isExpanded && { 'aria-expanded': true })}
        {...(isDisabled && { disabled: true })}
        {...props}
      >
        {isPlain && children}
        {!isPlain && content}
      </button>
    );
  }
}
