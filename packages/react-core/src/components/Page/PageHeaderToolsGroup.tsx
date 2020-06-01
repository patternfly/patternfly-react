import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../helpers/util';

export interface PageHeaderToolsGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in the page header tools group */
  children: React.ReactNode;
  /** Additional classes added to the page header tools group. */
  className?: string;
  /** Visibility at various breakpoints. */
  visibility?: {
    default: 'hidden' | 'visible';
    sm: 'hidden' | 'visible';
    md: 'hidden' | 'visible';
    lg: 'hidden' | 'visible';
    xl: 'hidden' | 'visible';
    '2xl': 'hidden' | 'visible';
  };
}

export const PageHeaderToolsGroup: React.FunctionComponent<PageHeaderToolsGroupProps> = ({
  children,
  className,
  visibility,
  ...props
}: PageHeaderToolsGroupProps) => (
  <div className={css(styles.pageHeaderToolsGroup, formatBreakpointMods(visibility, styles), className)} {...props}>
    {children}
  </div>
);
