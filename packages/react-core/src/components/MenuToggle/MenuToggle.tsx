import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import { BadgeProps } from '../Badge';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';

export enum MenuToggleStatus {
  success = 'success',
  danger = 'danger',
  warning = 'warning'
}

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
  /** @beta Status styles of the menu toggle */
  status?: 'success' | 'warning' | 'danger';
  /** Overrides the status icon */
  statusIcon?: React.ReactNode;
  /** Optional icon or image rendered inside the toggle, before the children content. It is
   * recommended to wrap most basic icons in our icon component.
   */
  icon?: React.ReactNode;
  /** Optional badge rendered inside the toggle, after the children content */
  badge?: BadgeProps | React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<MenuToggleElement>;
}

class MenuToggleBase extends React.Component<MenuToggleProps> {
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
      status,
      statusIcon,
      innerRef,
      onClick,
      'aria-label': ariaLabel,
      ...otherProps
    } = this.props;
    const isPlain = variant === 'plain';
    const isPlainText = variant === 'plainText';
    const isTypeahead = variant === 'typeahead';

    let _statusIcon = statusIcon;
    if (!statusIcon) {
      switch (status) {
        case MenuToggleStatus.success:
          _statusIcon = <CheckCircleIcon aria-hidden="true" />;
          break;
        case MenuToggleStatus.warning:
          _statusIcon = <ExclamationTriangleIcon aria-hidden="true" />;
          break;
        case MenuToggleStatus.danger:
          _statusIcon = <ExclamationCircleIcon aria-hidden="true" />;
          break;
      }
    }

    const toggleControls = (
      <span className={css(styles.menuToggleControls)}>
        {status !== undefined && <span className={css(styles.menuToggleStatusIcon)}>{_statusIcon}</span>}
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
            aria-label={ariaLabel || 'Menu toggle'}
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
      status && styles.modifiers[status],
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
            {...(children && { style: { display: 'flex', paddingLeft: 'var(--pf-v5-global--spacer--sm)' } })}
            {...otherProps}
          >
            {children && <span className={css(styles.menuToggleText)}>{children}</span>}
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
