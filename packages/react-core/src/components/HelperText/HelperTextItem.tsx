import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { css } from '@patternfly/react-styles';

export interface HelperTextItemProps extends React.HTMLProps<HTMLDivElement | HTMLLIElement> {
  /** Content rendered inside the helper text item. */
  children?: React.ReactNode;
  /** Additional classes applied to the helper text item. */
  className?: string;
  /** Sets the component type of the helper text item. */
  component?: 'div' | 'li';
  /** Variant styling of the helper text item. */
  variant?: 'default' | 'indeterminate' | 'warning' | 'success' | 'invalid';
  /** Icon prefixing the helper text. */
  icon?: React.ReactNode;
  /** Flag indicating the helper text item is dynamic. */
  isDynamic?: boolean;
}

const variantStyle = {
  default: '',
  indeterminate: styles.modifiers.indeterminate,
  warning: styles.modifiers.warning,
  success: styles.modifiers.success,
  invalid: styles.modifiers.invalid
};

export const HelperTextItem: React.FunctionComponent<HelperTextItemProps> = ({
  children,
  className,
  component = 'div',
  variant = 'default',
  icon,
  isDynamic,
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
      <span className={css(styles.helperTextItemText)}>{children}</span>
    </Component>
  );
};
HelperTextItem.displayName = 'HelperTextItem';
