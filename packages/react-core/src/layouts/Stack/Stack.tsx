import * as React from 'react';
import styles from '@patternfly/react-styles/css/layouts/Stack/stack';
import { css } from '@patternfly/react-styles';

export interface StackProps extends React.HTMLProps<HTMLDivElement> {
  /** Adds space between children. */
  hasGutter?: boolean;
  /** Content rendered inside the stack layout. */
  children?: React.ReactNode;
  /** Additional classes added to the stack layout. */
  className?: string;
  /** Sets the base component to render. Defaults to div. */
  component?: React.ReactNode;
}

export const Stack: React.FunctionComponent<StackProps> = ({
  hasGutter = false,
  className = '',
  children = null,
  component = 'div',
  ...props
}: StackProps) => {
  const Component = component as any;
  return (
    <Component {...props} className={css(styles.stack, hasGutter && styles.modifiers.gutter, className)}>
      {children}
    </Component>
  );
};
Stack.displayName = 'Stack';
