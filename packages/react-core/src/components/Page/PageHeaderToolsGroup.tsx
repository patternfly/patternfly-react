import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageHeaderToolsGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in the page header tools group */
  children: React.ReactNode;
  /** Additional classes added to the page header tools group. */
  className?: string;
  /** Makes the group only visible for desktop sizes (>= lg breakpoint) */
  visibleOnLg?: boolean;
  /** Hides the group for desktop sizes (< lg breakpoint) */
  hiddenOnLg?: boolean;
  /** Hides the group for mobile sizes (< md breakpoint). Typically used on a user dropdown */
  hiddenOnSm?: boolean;
}

export const PageHeaderToolsGroup: React.FunctionComponent<PageHeaderToolsGroupProps> = ({
  children,
  className,
  hiddenOnLg,
  visibleOnLg,
  hiddenOnSm,
  ...props
}: PageHeaderToolsGroupProps) => (
  <div 
    className={css(
      styles.pageHeaderToolsGroup,
      hiddenOnLg && styles.modifiers.mobile,
      visibleOnLg && styles.modifiers.icons,
      hiddenOnSm && styles.modifiers.user
    )}
    {...props}
  >
    {children}
  </div>
)
