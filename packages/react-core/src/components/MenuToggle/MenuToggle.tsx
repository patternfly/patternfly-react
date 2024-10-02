import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import { BadgeProps } from '../Badge';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import { OUIAProps, getDefaultOUIAId, getOUIAProps } from '../../helpers';

export enum MenuToggleStatus {
  success = 'success',
  danger = 'danger',
  warning = 'warning'
}

export enum MenuToggleSize {
  default = 'default',
  sm = 'sm'
}

export type MenuToggleElement = HTMLDivElement | HTMLButtonElement;

export interface MenuToggleProps
  extends Omit<
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLDivElement>,
        MenuToggleElement
      >,
      'ref'
    >,
    OUIAProps {
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
  /** Flag indicating the toggle contains placeholder text */
  isPlaceholder?: boolean;
  /** Elements to display before the toggle button. When included, renders the menu toggle as a split button. */
  splitButtonItems?: React.ReactNode[];
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
  /** Status styles of the menu toggle */
  status?: 'success' | 'warning' | 'danger';
  /** Overrides the status icon */
  statusIcon?: React.ReactNode;
  /** Optional icon or image rendered inside the toggle, before the children content. It is
   * recommended to wrap most basic icons in our icon component.
   */
  icon?: React.ReactNode;
  /** Optional badge rendered inside the toggle, after the children content */
  badge?: BadgeProps | React.ReactNode;
  /** Adds styling which affects the size of the menu toggle */
  size?: 'default' | 'sm';
  /** @hide Forwarded ref */
  innerRef?: React.Ref<MenuToggleElement>;
  /** Value to overwrite the randomly generated data-ouia-component-id. It will always target the toggle button. */
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

interface MenuToggleState {
  ouiaStateId: string;
}

class MenuToggleBase extends React.Component<MenuToggleProps, MenuToggleState> {
  displayName = 'MenuToggleBase';
  static defaultProps: MenuToggleProps = {
    className: '',
    isExpanded: false,
    isDisabled: false,
    isFullWidth: false,
    isFullHeight: false,
    isPlaceholder: false,
    size: 'default',
    ouiaSafe: true
  };

  state: MenuToggleState = {
    ouiaStateId: getDefaultOUIAId(MenuToggle.displayName, this.props.variant)
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
      isPlaceholder,
      splitButtonItems,
      variant,
      status,
      statusIcon,
      innerRef,
      onClick,
      'aria-label': ariaLabel,
      ouiaId,
      ouiaSafe,
      size,
      ...otherProps
    } = this.props;
    const isPlain = variant === 'plain';
    const isPlainText = variant === 'plainText';
    const isTypeahead = variant === 'typeahead';

    const ouiaProps = getOUIAProps(MenuToggle.displayName, ouiaId ?? this.state.ouiaStateId, ouiaSafe);

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
        {isTypeahead ? children : children && <span className={css(styles.menuToggleText)}>{children}</span>}
        {React.isValidElement(badge) && <span className={css(styles.menuToggleCount)}>{badge}</span>}
        {isTypeahead ? (
          <button
            type="button"
            className={css(styles.menuToggleButton)}
            aria-expanded={isExpanded}
            onClick={onClick}
            aria-label={ariaLabel || 'Menu toggle'}
            tabIndex={-1}
            {...ouiaProps}
          >
            {toggleControls}
          </button>
        ) : (
          !isPlain && toggleControls
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
      isPlainText && 'pf-m-text',
      isFullHeight && styles.modifiers.fullHeight,
      isFullWidth && styles.modifiers.fullWidth,
      isDisabled && styles.modifiers.disabled,
      isPlaceholder && styles.modifiers.placeholder,
      size === MenuToggleSize.sm && styles.modifiers.small,
      className
    );

    const componentProps = {
      children: content,
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

    if (splitButtonItems) {
      return (
        <div ref={innerRef as React.Ref<HTMLDivElement>} className={css(commonStyles, styles.modifiers.splitButton)}>
          {splitButtonItems}
          <button
            className={css(styles.menuToggleButton, children && styles.modifiers.text)}
            type="button"
            aria-expanded={isExpanded}
            aria-label={ariaLabel}
            disabled={isDisabled}
            onClick={onClick}
            {...otherProps}
            {...ouiaProps}
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
        {...ouiaProps}
      />
    );
  }
}

export const MenuToggle = React.forwardRef((props: MenuToggleProps, ref: React.Ref<MenuToggleElement>) => (
  <MenuToggleBase innerRef={ref} {...props} />
));

MenuToggle.displayName = 'MenuToggle';
