import { forwardRef, type ReactNode, type Ref } from 'react';
import type { OUIAProps } from '../../helpers/OUIA/ouia';
import type { PfV5Button as PfV5ButtonElement } from '@patternfly/elements/pf-v5-button/pf-v5-button.js';
import { V5Button } from '@patternfly/elements/react/pf-v5-button/pf-v5-button.js';
import type { BadgeCountObject } from '../Button';

type PfButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'warning'
  | 'link'
  | 'plain'
  | 'control'
  | 'stateful';

export interface FeltButtonProps extends OUIAProps {
  children?: ReactNode;
  className?: string;
  component?: React.ElementType<any> | React.ComponentType<any>;
  isClicked?: boolean;
  isBlock?: boolean;
  isDisabled?: boolean;
  isAriaDisabled?: boolean;
  isLoading?: boolean;
  spinnerAriaValueText?: string;
  spinnerAriaLabel?: string;
  spinnerAriaLabelledBy?: string;
  inoperableEvents?: string[];
  isInline?: boolean;
  isFavorite?: boolean;
  isFavorited?: boolean;
  size?: 'default' | 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  variant?: PfButtonVariant;
  state?: 'read' | 'unread' | 'attention';
  hasNoPadding?: boolean;
  iconPosition?: 'start' | 'end' | 'left' | 'right';
  'aria-label'?: string;
  icon?: ReactNode | null;
  tabIndex?: number;
  isDanger?: boolean;
  isExpanded?: boolean;
  isSettings?: boolean;
  isHamburger?: boolean;
  hamburgerVariant?: 'expand' | 'collapse';
  isCircle?: boolean;
  isDocked?: boolean;
  isTextExpanded?: boolean;
  countOptions?: BadgeCountObject;
  ouiaId?: number | string;
  ouiaSafe?: boolean;
  onClick?: React.MouseEventHandler;
  href?: string;
  target?: string;
  id?: string;
  style?: React.CSSProperties;
  title?: string;
  name?: string;
  value?: string;
  role?: string;
  [key: `data-${string}`]: string | undefined;
  [key: `aria-${string}`]: string | undefined;
}

const unsupportedProps: Record<string, string> = {
  component:
    'The "component" prop is not supported. pf-v5-button renders as a <button> (or <a> for link+href). Use variant="link" with href for anchor behavior.',
  isAriaDisabled: 'The "isAriaDisabled" prop is not supported. pf-v5-button only supports native disabled.',
  isClicked: 'The "isClicked" prop is not supported by pf-v5-button.',
  isFavorite: 'The "isFavorite" prop is not supported by pf-v5-button.',
  isFavorited: 'The "isFavorited" prop is not supported by pf-v5-button.',
  isSettings: 'The "isSettings" prop is not supported by pf-v5-button.',
  isHamburger: 'The "isHamburger" prop is not supported by pf-v5-button.',
  hamburgerVariant: 'The "hamburgerVariant" prop is not supported by pf-v5-button.',
  isCircle: 'The "isCircle" prop is not supported by pf-v5-button.',
  isDocked: 'The "isDocked" prop is not supported by pf-v5-button.',
  isTextExpanded: 'The "isTextExpanded" prop is not supported by pf-v5-button.',
  countOptions: 'The "countOptions" prop is not supported by pf-v5-button.',
  hasNoPadding: 'The "hasNoPadding" prop is not supported by pf-v5-button.',
  inoperableEvents: 'The "inoperableEvents" prop is not supported. pf-v5-button does not support aria-disabled.',
  spinnerAriaValueText: 'The "spinnerAriaValueText" prop is not supported. Use the "loading-label" attribute instead.',
  spinnerAriaLabelledBy: 'The "spinnerAriaLabelledBy" prop is not supported by pf-v5-button.',
  ouiaId: 'The "ouiaId" prop is not supported by pf-v5-button.',
  ouiaSafe: 'The "ouiaSafe" prop is not supported by pf-v5-button.',
  state: 'The "state" prop (stateful variant) is not supported by pf-v5-button.',
  isExpanded: 'The "isExpanded" prop is not supported by pf-v5-button.'
};

const warnedProps = new Set<string>();

function warnUnsupported(propName: string) {
  if (warnedProps.has(propName)) {
    return;
  }
  warnedProps.add(propName);
  const message = unsupportedProps[propName];
  if (message) {
    // eslint-disable-next-line no-console
    console.warn(`FeltButton: ${message}`);
  }
}

function mapSizeToPfe(size?: 'default' | 'sm' | 'lg'): 'small' | 'large' | undefined {
  switch (size) {
    case 'sm':
      return 'small';
    case 'lg':
      return 'large';
    default:
      return undefined;
  }
}

function resolveVariant(
  variant: PfButtonVariant = 'primary',
  isDanger?: boolean
): {
  pfeVariant: 'primary' | 'secondary' | 'tertiary' | 'control' | 'link';
  danger: boolean;
  warning: boolean;
  plain: boolean;
} {
  switch (variant) {
    case 'danger':
      return { pfeVariant: 'primary', danger: true, warning: false, plain: false };
    case 'warning':
      return { pfeVariant: 'primary', danger: false, warning: true, plain: false };
    case 'plain':
      return { pfeVariant: 'primary', danger: false, warning: false, plain: true };
    case 'stateful':
      return { pfeVariant: 'primary', danger: false, warning: false, plain: false };
    default:
      return {
        pfeVariant: variant,
        danger: !!(isDanger && (variant === 'secondary' || variant === 'link')),
        warning: false,
        plain: false
      };
  }
}

const FeltButtonBase = (
  {
    children = null,
    className,
    component,
    isClicked,
    isBlock = false,
    isDisabled = false,
    isAriaDisabled,
    isLoading,
    spinnerAriaValueText,
    spinnerAriaLabel,
    spinnerAriaLabelledBy,
    inoperableEvents,
    isInline = false,
    isFavorite,
    isFavorited,
    size = 'default',
    type = 'button',
    variant = 'primary',
    state,
    hasNoPadding,
    iconPosition = 'start',
    'aria-label': ariaLabel,
    icon = null,
    tabIndex,
    isDanger,
    isExpanded,
    isSettings,
    isHamburger,
    hamburgerVariant,
    isCircle,
    isDocked,
    isTextExpanded,
    countOptions,
    ouiaId,
    ouiaSafe,
    onClick,
    href,
    target,
    name,
    value,
    ...rest
  }: FeltButtonProps,
  ref: Ref<PfV5ButtonElement> // replaces hidden prop innerRef with native forwardRef
) => {
  // Warn for unsupported props (once per prop)
  const unsupportedValues: Record<string, unknown> = {
    component,
    isAriaDisabled,
    isClicked,
    isFavorite,
    isFavorited,
    isSettings,
    isHamburger,
    hamburgerVariant,
    isCircle,
    isDocked,
    isTextExpanded,
    countOptions,
    hasNoPadding,
    inoperableEvents,
    spinnerAriaValueText,
    spinnerAriaLabelledBy,
    ouiaId,
    ouiaSafe,
    state,
    isExpanded
  };
  for (const prop of Object.keys(unsupportedProps)) {
    if (unsupportedValues[prop] !== undefined && unsupportedValues[prop] !== false) {
      warnUnsupported(prop);
    }
  }
  if (variant === 'stateful') {
    warnUnsupported('state');
  }

  const { pfeVariant, danger, warning, plain } = resolveVariant(variant, isDanger);
  const isIconAtEnd = iconPosition === 'end' || iconPosition === 'right';

  return (
    <V5Button
      ref={ref}
      className={className}
      variant={pfeVariant}
      danger={danger}
      warning={warning}
      plain={plain}
      disabled={isDisabled}
      loading={isLoading || false}
      inline={isInline}
      block={isBlock}
      size={mapSizeToPfe(size)}
      type={type}
      label={ariaLabel || undefined}
      name={name}
      value={value}
      href={pfeVariant === 'link' ? href : undefined}
      target={pfeVariant === 'link' && href ? target : undefined}
      loading-label={spinnerAriaLabel}
      tabIndex={tabIndex}
      onClick={onClick}
      {...rest}
    >
      {/* icon position doesn't work - slot is static inside web component. would need a start and end icon slot to support. */}
      {icon && !isIconAtEnd && <span slot="icon">{icon}</span>}
      {children}
      {icon && isIconAtEnd && <span slot="icon">{icon}</span>}
    </V5Button>
  );
};

export const FeltButton = forwardRef<PfV5ButtonElement, FeltButtonProps>(FeltButtonBase);

FeltButton.displayName = 'FeltButton';
