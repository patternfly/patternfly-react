import * as React from 'react';
import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { css } from '@patternfly/react-styles';

export interface SplitItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Flag indicating if this split layout item should fill the available horizontal space. */
  isFilled?: boolean;
  /** Content rendered inside the split layout item. */
  children?: React.ReactNode;
  /** Additional classes added to the split layout item. */
  className?: string;
  /** Sets the base component to render. Defaults to div. */
  component?: React.ReactNode;
}

export const SplitItem: React.FunctionComponent<SplitItemProps> = ({
  isFilled = false,
  className = '',
  children = null,
  component = 'div',
  ...props
}: SplitItemProps) => {
  const Component = component as any;
  return (
    <Component {...props} className={css(styles.splitItem, isFilled && styles.modifiers.fill, className)}>
      {children}
    </Component>
  );
};
SplitItem.displayName = 'SplitItem';
