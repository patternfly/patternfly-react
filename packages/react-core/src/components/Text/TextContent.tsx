import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';

export interface TextContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the TextContent */
  children?: React.ReactNode;
  /** Additional classes added to the TextContent */
  className?: string;
}

/**
 *
 */
export function TextContent({ children = null, className = '', ...props }: TextContentProps) {
  return (
    <div {...props} className={css(styles.content, className)}>
      {children}
    </div>
  );
}
