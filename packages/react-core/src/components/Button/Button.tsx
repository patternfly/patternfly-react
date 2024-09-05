import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import { Spinner, spinnerSize } from '../Spinner';
import { useOUIAProps, OUIAProps } from '../../helpers/OUIA/ouia';
import { Badge } from '../Badge';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
  warning = 'warning',
  link = 'link',
  plain = 'plain',
  control = 'control',
  stateful = 'stateful'
}

export enum ButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export enum ButtonSize {
  default = 'default',
  sm = 'sm',
  lg = 'lg'
}

export enum ButtonState {
  read = 'read',
  unread = 'unread',
  attention = 'attention'
}

export interface BadgeCountObject {
  /**  Adds styling to the badge to indicate it has been read */
  isRead?: boolean;
  /** Adds count number right of button */
  count?: number;
  /** Additional classes added to the badge count */
  className?: string;
}

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref' | 'size'>, OUIAProps {
  /** Content rendered inside the button */
  children?: React.ReactNode;
  /** Additional classes added to the button */
  className?: string;
  /** Sets the base component to render. defaults to button */
  component?: React.ElementType<any> | React.ComponentType<any>;
  /** Adds clicked styling to button. */
  isClicked?: boolean;
  /** Adds block styling to button */
  isBlock?: boolean;
  /** Adds disabled styling and disables the button using the disabled html attribute */
  isDisabled?: boolean;
  /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
  isAriaDisabled?: boolean;
  /** Adds progress styling to button */
  isLoading?: boolean;
  /** Text describing that current loading status or progress */
  spinnerAriaValueText?: string;
  /** Accessible label for the spinner to describe what is loading */
  spinnerAriaLabel?: string;
  /** Id of element which describes what is being loaded */
  spinnerAriaLabelledBy?: string;
  /** Events to prevent when the button is in an aria-disabled state */
  inoperableEvents?: string[];
  /** Adds inline styling to a link button */
  isInline?: boolean;
  /** Adds styling which affects the size of the button */
  size?: 'default' | 'sm' | 'lg';
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Adds button variant styles */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control' | 'stateful';
  /** Sets state of the stateful button variant. Default is "unread" */
  state?: 'read' | 'unread' | 'attention';
  /** Applies no padding on a plain button variant. Use when plain button is placed inline with text */
  hasNoPadding?: boolean;
  /** Sets position of the icon. Note: "left" and "right" are deprecated. Use "start" and "end" instead */
  iconPosition?: 'start' | 'end' | 'left' | 'right';
  /** Adds accessible text to the button. */
  'aria-label'?: string;
  /** Icon for the button. */
  icon?: React.ReactNode | null;
  /** Sets the button tabindex. */
  tabIndex?: number;
  /** Adds danger styling to secondary or link button variants */
  isDanger?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Adds count number to button */
  countOptions?: BadgeCountObject;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

const ButtonBase: React.FunctionComponent<ButtonProps> = ({
  children = null,
  className = '',
  component = 'button',
  isClicked = false,
  isBlock = false,
  isDisabled = false,
  isAriaDisabled = false,
  isLoading = null,
  isDanger = false,
  spinnerAriaValueText,
  spinnerAriaLabelledBy,
  spinnerAriaLabel,
  size = ButtonSize.default,
  inoperableEvents = ['onClick', 'onKeyPress'],
  isInline = false,
  type = ButtonType.button,
  variant = ButtonVariant.primary,
  state = ButtonState.unread,
  hasNoPadding = false,
  iconPosition = 'start',
  'aria-label': ariaLabel = null,
  icon = null,
  role,
  ouiaId,
  ouiaSafe = true,
  tabIndex = null,
  innerRef,
  countOptions,
  ...props
}: ButtonProps) => {
  const ouiaProps = useOUIAProps(Button.displayName, ouiaId, ouiaSafe, variant);
  const Component = component as any;
  const isButtonElement = Component === 'button';
  const isInlineSpan = isInline && Component === 'span';
  const isIconAlignedAtEnd = iconPosition === 'end' || iconPosition === 'right';

  const preventedEvents = inoperableEvents.reduce(
    (handlers, eventToPrevent) => ({
      ...handlers,
      [eventToPrevent]: (event: React.SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
      }
    }),
    {}
  );

  const getDefaultTabIdx = () => {
    if (isDisabled) {
      return isButtonElement ? null : -1;
    } else if (isAriaDisabled) {
      return null;
    } else if (isInlineSpan) {
      return 0;
    }
  };

  const _icon = icon && (
    <span className={css(styles.buttonIcon, children && styles.modifiers[isIconAlignedAtEnd ? 'end' : 'start'])}>
      {icon}
    </span>
  );
  const _children = children && <span className={css('pf-v6-c-button__text')}>{children}</span>;

  return (
    <Component
      {...props}
      {...(isAriaDisabled ? preventedEvents : null)}
      aria-disabled={isAriaDisabled || (!isButtonElement && isDisabled)}
      aria-label={ariaLabel}
      className={css(
        styles.button,
        styles.modifiers[variant],
        isBlock && styles.modifiers.block,
        isDisabled && !isButtonElement && styles.modifiers.disabled,
        isAriaDisabled && styles.modifiers.ariaDisabled,
        isClicked && styles.modifiers.clicked,
        isInline && variant === ButtonVariant.link && styles.modifiers.inline,
        isDanger && (variant === ButtonVariant.secondary || variant === ButtonVariant.link) && styles.modifiers.danger,
        isLoading !== null && variant !== ButtonVariant.plain && styles.modifiers.progress,
        isLoading && styles.modifiers.inProgress,
        hasNoPadding && variant === ButtonVariant.plain && styles.modifiers.noPadding,
        variant === ButtonVariant.stateful && styles.modifiers[state],
        size === ButtonSize.sm && styles.modifiers.small,
        size === ButtonSize.lg && styles.modifiers.displayLg,
        className
      )}
      disabled={isButtonElement ? isDisabled : null}
      tabIndex={tabIndex !== null ? tabIndex : getDefaultTabIdx()}
      type={isButtonElement || isInlineSpan ? type : null}
      role={isInlineSpan ? 'button' : role}
      ref={innerRef}
      {...ouiaProps}
    >
      {isLoading && (
        <span className={css(styles.buttonProgress)}>
          <Spinner
            size={spinnerSize.md}
            isInline={isInline}
            aria-valuetext={spinnerAriaValueText}
            aria-label={spinnerAriaLabel}
            aria-labelledby={spinnerAriaLabelledBy}
          />
        </span>
      )}
      {isIconAlignedAtEnd ? (
        <>
          {_children}
          {_icon}
        </>
      ) : (
        <>
          {_icon}
          {_children}
        </>
      )}
      {countOptions && (
        <span className={css(styles.buttonCount, countOptions.className)}>
          <Badge isRead={countOptions.isRead} isDisabled={isDisabled}>
            {countOptions.count}
          </Badge>
        </span>
      )}
    </Component>
  );
};

export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<any>) => (
  <ButtonBase innerRef={ref} {...props} />
));

Button.displayName = 'Button';
