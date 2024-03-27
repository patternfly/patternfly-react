import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { css } from '@patternfly/react-styles';

export interface SplitProps extends HTMLProps<HTMLDivElement> {
  /** Adds space between children. */
  hasGutter?: boolean;
  /** Allows children to wrap */
  isWrappable?: boolean;
  /** content rendered inside the Split layout */
  children?: ReactNode;
  /** additional classes added to the Split layout */
  className?: string;
  /** Sets the base component to render. defaults to div */
  component?: ReactNode;
}

export const Split: FunctionComponent<SplitProps> = ({
  hasGutter = false,
  isWrappable = false,
  className = '',
  children = null,
  component = 'div',
  ...props
}: SplitProps) => {
  const Component = component as any;
  return (
    <Component
      {...props}
      className={css(
        styles.split,
        hasGutter && styles.modifiers.gutter,
        isWrappable && styles.modifiers.wrap,
        className
      )}
    >
      {children}
    </Component>
  );
};
Split.displayName = 'Split';
