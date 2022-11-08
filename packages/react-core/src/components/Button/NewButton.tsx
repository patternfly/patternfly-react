// @ts-nocheck
import * as React from 'react';
import styleKeys from '@breakaway/react-styles/css/components/Button/button.module.js';
import variables from '@breakaway/react-styles/css/base/base.module.css';
import styles from '@breakaway/react-styles/css/components/Button/button.module.css';
import { css } from '@breakaway/react-styles';
import { Spinner, spinnerSize } from '../Spinner';
import { useOUIAProps, OUIAProps } from '../../helpers';
import { Badge } from '../Badge';

export enum NewButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
  warning = 'warning',
  link = 'link',
  plain = 'plain',
  control = 'control'
}

export enum NewButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export interface NewBadgeCountObject {
  /**  Adds styling to the badge to indicate it has been read */
  isRead?: boolean;
  /** Adds count number right of button */
  count?: number;
  /** Additional classes added to the badge count */
  className?: string;
}

export interface NewButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref'>, OUIAProps {
  /** Content rendered inside the button */
  children?: React.ReactNode;
  /** Additional classes added to the button */
  className?: string;
  /** Sets the base component to render. defaults to button */
  component?: React.ElementType<any> | React.ComponentType<any>;
  /** Adds active styling to button. */
  isActive?: boolean;
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
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Adds button variant styles */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control';
  /** Sets position of the link icon */
  iconPosition?: 'left' | 'right';
  /** Adds accessible text to the button. */
  'aria-label'?: string;
  /** Icon for the button. Usable by all variants except for plain. */
  icon?: React.ReactNode | null;
  /** Sets the button tabindex. */
  tabIndex?: number;
  /** Adds small styling to the button */
  isSmall?: boolean;
  /** Adds large styling to the button */
  isLarge?: boolean;
  /** Adds danger styling to secondary or link button variants */
  isDanger?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Adds count number to button */
  countOptions?: NewBadgeCountObject;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  useDarkTheme?: boolean;
}

const ButtonBase: React.FunctionComponent<NewButtonProps> = ({
  children = null,
  className = '',
  component = 'button',
  isActive = false,
  isBlock = false,
  isDisabled = false,
  isAriaDisabled = false,
  isLoading = null,
  isDanger = false,
  spinnerAriaValueText,
  spinnerAriaLabelledBy,
  spinnerAriaLabel,
  isSmall = false,
  isLarge = false,
  inoperableEvents = ['onClick', 'onKeyPress'],
  isInline = false,
  type = NewButtonType.button,
  variant = NewButtonVariant.primary,
  iconPosition = 'left',
  'aria-label': ariaLabel = null,
  icon = null,
  ouiaId,
  ouiaSafe = true,
  tabIndex = null,
  innerRef,
  countOptions,
  useDarkTheme = false,
  ...props
}: NewButtonProps) => {
  const ouiaProps = useOUIAProps(NewButton.displayName, ouiaId, ouiaSafe, variant);
  const Component = component as any;
  const isButtonElement = Component === 'button';
  const isInlineSpan = isInline && Component === 'span';

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

  return (
    <Component
      {...props}
      {...(isAriaDisabled ? preventedEvents : null)}
      aria-disabled={isDisabled || isAriaDisabled}
      aria-label={ariaLabel}
      className={css(
        variables.root,
        styles[styleKeys.button],
        styles[styleKeys.modifiers[variant]],
        isBlock && styles[styleKeys.modifiers.block],
        isDisabled && styles[styleKeys.modifiers.disabled],
        isAriaDisabled && styles[styleKeys.modifiers.ariaDisabled],
        isActive && styles[styleKeys.modifiers.active],
        isInline && variant === NewButtonVariant.link && styles[styleKeys.modifiers.inline],
        isDanger && (variant === NewButtonVariant.secondary || variant === NewButtonVariant.link) && styles[styleKeys.modifiers.danger],
        isLoading !== null && children !== null && styles[styleKeys.modifiers.progress],
        isLoading && styles[styleKeys.modifiers.inProgress],
        isSmall && styles[styleKeys.modifiers.small],
        isLarge && styles[styleKeys.modifiers.displayLg],
        useDarkTheme && styles[styleKeys.themeDark],
        className
      )}
      disabled={isButtonElement ? isDisabled : null}
      tabIndex={tabIndex !== null ? tabIndex : getDefaultTabIdx()}
      type={isButtonElement || isInlineSpan ? type : null}
      role={isInlineSpan ? 'button' : null}
      ref={innerRef}
      {...ouiaProps}
    >
      {isLoading && (
        <span className={css(styles[styleKeys.buttonProgress])}>
          <Spinner
            size={spinnerSize.md}
            aria-valuetext={spinnerAriaValueText}
            aria-label={spinnerAriaLabel}
            aria-labelledby={spinnerAriaLabelledBy}
          />
        </span>
      )}
      {variant === NewButtonVariant.plain && children === null && icon ? icon : null}
      {variant !== NewButtonVariant.plain && icon && iconPosition === 'left' && (
        <span className={css(styles[styleKeys.buttonIcon], styles[styleKeys.modifiers.start])}>{icon}</span>
      )}
      {children}
      {variant !== NewButtonVariant.plain && icon && iconPosition === 'right' && (
        <span className={css(styles[styleKeys.buttonIcon], styles[styleKeys.modifiers.end])}>{icon}</span>
      )}
      {countOptions && (
        <span className={css(styles[styleKeys.buttonCount], countOptions.className)}>
          <Badge isRead={countOptions.isRead}>{countOptions.count}</Badge>
        </span>
      )}
    </Component>
  );
};

export const NewButton = React.forwardRef((props: NewButtonProps, ref: React.Ref<any>) => (
  <ButtonBase innerRef={ref} {...props} />
));

NewButton.displayName = 'NewButton';