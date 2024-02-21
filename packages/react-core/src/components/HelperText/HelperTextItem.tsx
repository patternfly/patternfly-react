import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export enum HelperTextItemVariant {
  default = 'default',
  warning = 'warning',
  error = 'error',
  success = 'success'
}

export interface HelperTextItemProps extends React.HTMLProps<HTMLDivElement | HTMLLIElement> {
  /** Content rendered inside the helper text item. */
  children?: React.ReactNode;
  /** Additional classes applied to the helper text item. */
  className?: string;
  /** Sets the component type of the helper text item. */
  component?: 'div' | 'li';
  /** Variant styling of the helper text item. Will also render a default icon, which can be overridden
   * with the icon prop.
   */
  variant?: 'default' | 'indeterminate' | 'warning' | 'success' | 'error';
  /** Custom icon prefixing the helper text. This property will override the default icon when the variant property is passed in. */
  icon?: React.ReactNode;
  /** ID for the helper text item. The value of this prop can be passed into a form component's
   * aria-describedby prop when you intend for only specific helper text items to be announced to
   * assistive technologies.
   */
  id?: string;
  /** Text that is only accessible to screen readers in order to announce the variant of a helper text item.
   * This prop can only be used when the variant prop has a value other than "default".
   */
  screenReaderText?: string;
}

const defaultVariantIcons = {
  indeterminate: <MinusIcon />,
  warning: <ExclamationTriangleIcon />,
  success: <CheckCircleIcon />,
  error: <ExclamationCircleIcon />
};

export const HelperTextItem: React.FunctionComponent<HelperTextItemProps> = ({
  children,
  className,
  component = 'div',
  variant = 'default',
  icon,
  id,
  screenReaderText = `${variant} status`,
  ...props
}: HelperTextItemProps) => {
  const Component = component as any;
  const isNotDefaultVariant = variant !== 'default';
  const defaultIcon = isNotDefaultVariant && defaultVariantIcons[variant];
  return (
    <Component
      className={css(styles.helperTextItem, isNotDefaultVariant && styles.modifiers[variant], className)}
      id={id}
      {...props}
    >
      {(defaultIcon || icon) && (
        <span className={css(styles.helperTextItemIcon)} aria-hidden>
          {icon || defaultIcon}
        </span>
      )}

      <span className={css(styles.helperTextItemText)}>
        {children}
        {isNotDefaultVariant && <span className="pf-v6-screen-reader">: {screenReaderText};</span>}
      </span>
    </Component>
  );
};
HelperTextItem.displayName = 'HelperTextItem';
