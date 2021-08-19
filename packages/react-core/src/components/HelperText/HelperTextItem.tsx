import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export interface HelperTextItemProps extends React.HTMLProps<HTMLDivElement | HTMLLIElement> {
  /** Content rendered inside the helper text item. */
  children?: React.ReactNode;
  /** Additional classes applied to the helper text item. */
  className?: string;
  /** Sets the component type of the helper text item. */
  component?: 'div' | 'li';
  /** Variant styling of the helper text item. */
  variant?: 'default' | 'indeterminate' | 'warning' | 'success' | 'error';
  /** Custom icon prefixing the helper text. This property will override the default icon paired with each helper text variant. */
  icon?: React.ReactNode;
  /** Flag indicating the helper text item is dynamic. */
  isDynamic?: boolean;
  /** Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not. */
  hasIcon?: boolean;
}

const variantStyle = {
  default: '',
  indeterminate: styles.modifiers.indeterminate,
  warning: styles.modifiers.warning,
  success: styles.modifiers.success,
  error: styles.modifiers.error
};

export const HelperTextItem: React.FunctionComponent<HelperTextItemProps> = ({
  children,
  className,
  component = 'div',
  variant = 'default',
  icon,
  isDynamic = false,
  hasIcon = isDynamic,
  ...props
}: HelperTextItemProps) => {
  const Component = component as any;
  return (
    <Component
      className={css(styles.helperTextItem, variantStyle[variant], isDynamic && styles.modifiers.dynamic, className)}
      {...props}
    >
      {icon && (
        <span className={css(styles.helperTextItemIcon)} aria-hidden>
          {icon}
        </span>
      )}
      {hasIcon && !icon && (
        <span className={css(styles.helperTextItemIcon)} aria-hidden>
          {(variant === 'default' || variant === 'indeterminate') && <MinusIcon />}
          {variant === 'warning' && <ExclamationTriangleIcon />}
          {variant === 'success' && <CheckCircleIcon />}
          {variant === 'error' && <ExclamationCircleIcon />}
        </span>
      )}
      <span className={css(styles.helperTextItemText)}>{children}</span>
    </Component>
  );
};
HelperTextItem.displayName = 'HelperTextItem';
