import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';

export interface ContextSelectorFooterProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the ContextSelectorFooter */
  children?: ReactNode;
  /** Additional classes added to the ContextSelectorFooter */
  className?: string;
}

export const ContextSelectorFooter: FunctionComponent<ContextSelectorFooterProps> = ({
  children = null,
  className = '',
  ...props
}: ContextSelectorFooterProps) => (
  <div {...props} className={css(styles.contextSelectorMenuFooter, className)}>
    {children}
  </div>
);
ContextSelectorFooter.displayName = 'ContextSelectorFooter';
