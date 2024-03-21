import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';

export interface ToolbarExpandIconWrapperProps extends HTMLProps<HTMLSpanElement> {
  /** Icon content used for the expand all or collapse all indication. */
  children?: ReactNode;
  /** Additional classes added to the span */
  className?: string;
}

export const ToolbarExpandIconWrapper: FunctionComponent<ToolbarExpandIconWrapperProps> = ({
  children,
  className,
  ...props
}: ToolbarExpandIconWrapperProps) => (
  <span {...props} className={css(styles.toolbarExpandAllIcon, className)}>
    {children}
  </span>
);
ToolbarExpandIconWrapper.displayName = 'ToolbarExpandIconWrapper';
