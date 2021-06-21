import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { css } from '@patternfly/react-styles';

export interface HelperTextProps extends React.HTMLProps<HTMLDivElement | HTMLUListElement> {
  /** Content rendered inside the helper text container. */
  children?: React.ReactNode;
  /** Additional classes applied to the helper text container. */
  className?: string;
  /** Component type of the helper text container */
  component?: 'div' | 'ul';
}

export const HelperText: React.FunctionComponent<HelperTextProps> = ({
  children,
  className,
  component = 'div',
  ...props
}: HelperTextProps) => {
  const Component = component as any;
  return (
    <Component className={css(styles.helperText, className)} {...props}>
      {children}
    </Component>
  );
};
HelperText.displayName = 'HelperText';
