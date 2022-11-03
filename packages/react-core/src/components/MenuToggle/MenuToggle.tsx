import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import { BadgeProps } from '../Badge';

export type MenuToggleElement = HTMLDivElement | HTMLButtonElement;

export interface SplitButtonOptions {
  /** Elements to display before the toggle button. When included, renders the menu toggle as a split button. */
  items: React.ReactNode[];
  /** Variant of split button toggle */
  variant?: 'action' | 'checkbox';
}

export interface MenuToggleProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLDivElement>,
      MenuToggleElement
    >,
    'ref'
  > {
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
  /** Object used to configure a split button menu toggle */
  splitButtonOptions?: SplitButtonOptions;
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
    isFullHeight: false
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
      splitButtonOptions,
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
        {isTypeahead ? children : <span className={css(styles.menuToggleText)}>{children}</span>}
        {React.isValidElement(badge) && <span className={css(styles.menuToggleCount)}>{badge}</span>}
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

    const commonStyles = css(
      styles.menuToggle,
      isExpanded && styles.modifiers.expanded,
      variant === 'primary' && styles.modifiers.primary,
      variant === 'secondary' && styles.modifiers.secondary,
      (isPlain || isPlainText) && styles.modifiers.plain,
      isPlainText && styles.modifiers.text,
      isFullHeight && styles.modifiers.fullHeight,
      isFullWidth && styles.modifiers.fullWidth,
      isDisabled && styles.modifiers.disabled,
      className
    );

    const componentProps = {
      children: isPlain ? children : content,
      ...(isDisabled && { disabled: true }),
      ...otherProps
    };

    if (isTypeahead) {
      return (
        <div
          ref={innerRef as React.Ref<HTMLDivElement>}
          className={css(commonStyles, styles.modifiers.typeahead)}
          {...componentProps}
        />
      );
    }

    if (splitButtonOptions) {
      return (
        <div
          ref={innerRef as React.Ref<HTMLDivElement>}
          className={css(
            commonStyles,
            styles.modifiers.splitButton,
            splitButtonOptions?.variant === 'action' && styles.modifiers.action
          )}
        >
          {splitButtonOptions?.items}
          <button
            className={css(styles.menuToggleButton)}
            type="button"
            aria-expanded={isExpanded}
            aria-label={ariaLabel}
            disabled={isDisabled}
            onClick={onClick}
            {...otherProps}
          >
            {toggleControls}
          </button>
        </div>
      );
    }

    return (
      <button
        className={css(commonStyles)}
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isExpanded}
        ref={innerRef as React.Ref<HTMLButtonElement>}
        disabled={isDisabled}
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
