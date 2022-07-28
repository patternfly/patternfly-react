import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import { BadgeProps } from '../Badge';

export type MenuToggleElement = HTMLDivElement | HTMLButtonElement;

export interface MenuToggleProps
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<MenuToggleElement>, MenuToggleElement>, 'ref'> {
  /** Content rendered inside the toggle */
  children?: React.ReactNode;
  /** Additional classes added to the toggle */
  className?: string;
  /** Flag indicating the toggle has expanded styling */
  isExpanded?: boolean;
  /** Flag indicating the toggle is disabled */
  isDisabled?: boolean;
  /** Flag indicating the toggle is full height */
  isFullHeight?: boolean;
  /** Flag indicating the toggle takes up the full width of its parent */
  isFullWidth?: boolean;
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
  /** Optional icon rendered inside the toggle, before the children content */
  icon?: React.ReactNode;
  /** Optional badge rendered inside the toggle, after the children content */
  badge?: BadgeProps | React.ReactNode;
  /** Forwarded ref */
  innerRef?: React.Ref<MenuToggleElement>;
}

export class MenuToggleBase extends React.Component<MenuToggleProps> {
  displayName = 'MenuToggleBase';
  static defaultProps: MenuToggleProps = {
    className: '',
    isExpanded: false,
    isDisabled: false,
    isFullWidth: false,
    isFullHeight: false,
    variant: 'default'
  };

  render() {
    const {
      children,
      className,
      icon,
      badge,
      isExpanded,
      isDisabled,
      isFullHeight,
      isFullWidth,
      variant,
      innerRef,
      onClick,
      'aria-label': ariaLabel,
      ...otherProps
    } = this.props;
    const isPlain = variant === 'plain';
    const isPlainText = variant === 'plainText';
    const isTypeahead = variant === 'typeahead';
    const toggleControls = (
      <span className={css(styles.menuToggleControls)}>
        <span className={css(styles.menuToggleToggleIcon)}>
          <CaretDownIcon aria-hidden />
        </span>
      </span>
    );

    const content = (
      <>
        {icon && <span className={css(styles.menuToggleIcon)}>{icon}</span>}
        {isTypeahead ? children : <span className="pf-c-menu-toggle__text">{children}</span>}
        {badge && <span className={css(styles.menuToggleCount)}>{badge}</span>}
        {isTypeahead ? (
          <button
            type="button"
            className={css(styles.menuToggleButton)}
            aria-expanded={isExpanded}
            onClick={onClick}
            aria-label="Menu toggle"
          >
            {toggleControls}
          </button>
        ) : (
          toggleControls
        )}
      </>
    );

    const componentProps = {
      className: css(
        styles.menuToggle,
        isExpanded && styles.modifiers.expanded,
        variant === 'primary' && styles.modifiers.primary,
        (isPlain || isPlainText) && styles.modifiers.plain,
        isPlainText && styles.modifiers.text,
        isFullHeight && styles.modifiers.fullHeight,
        isTypeahead && styles.modifiers.typeahead,
        isFullWidth && styles.modifiers.fullWidth,
        className
      ),
      children: isPlain ? children : content,
      ...(isDisabled && { disabled: true }),
      ...otherProps
    };

    if (isTypeahead) {
      return <div ref={innerRef as React.Ref<HTMLDivElement>} {...componentProps} />;
    }

    return (
      <button
        className={css(
          styles.menuToggle,
          isExpanded && styles.modifiers.expanded,
          variant === 'primary' && styles.modifiers.primary,
          variant === 'secondary' && styles.modifiers.secondary,
          (isPlain || isPlainText) && styles.modifiers.plain,
          isPlainText && styles.modifiers.text,
          isFullHeight && styles.modifiers.fullHeight,
          isFullWidth && styles.modifiers.fullWidth,
          className
        )}
        ref={innerRef as React.Ref<HTMLButtonElement>}
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isExpanded}
        onClick={onClick}
        {...componentProps}
      />
    );
  }
}

export const MenuToggle = React.forwardRef((props: MenuToggleProps, ref: React.Ref<MenuToggleElement>) => (
  <MenuToggleBase innerRef={ref} {...props} />
));

MenuToggle.displayName = 'MenuToggle';
