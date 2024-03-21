import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/layouts/Stack/stack';
import { css } from '@patternfly/react-styles';

export interface StackItemProps extends HTMLProps<HTMLDivElement> {
  /** Flag indicating if this Stack Layout item should fill the available vertical space. */
  isFilled?: boolean;
  /** additional classes added to the Stack Layout Item */
  children?: ReactNode;
  /** content rendered inside the Stack Layout Item */
  className?: string;
}

export const StackItem: FunctionComponent<StackItemProps> = ({
  isFilled = false,
  className = '',
  children = null,
  ...props
}: StackItemProps) => (
  <div {...props} className={css(styles.stackItem, isFilled && styles.modifiers.fill, className)}>
    {children}
  </div>
);
StackItem.displayName = 'StackItem';
