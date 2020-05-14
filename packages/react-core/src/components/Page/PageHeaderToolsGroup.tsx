import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { PageHeaderToolsBreakpointMod } from './PageHeaderTools';
import { formatBreakpointMods } from '../../helpers/util';

export interface PageHeaderToolsGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in the page header tools group */
  children: React.ReactNode;
  /** Additional classes added to the page header tools group. */
  className?: string;
  /** An array of breakpoint modifiers to control visibility, e.g. breakpointMods={[{ modifier: 'hidden' }, { modifier: 'visible', breakpoint: 'md' }]} */
  breakpointMods?: PageHeaderToolsBreakpointMod[];
}

export const PageHeaderToolsGroup: React.FunctionComponent<PageHeaderToolsGroupProps> = ({
  children,
  className,
  breakpointMods,
  ...props
}: PageHeaderToolsGroupProps) => (
  <div
    className={css(
      styles.pageHeaderToolsGroup,
      breakpointMods && formatBreakpointMods(breakpointMods, styles),
      className
    )}
    {...props}
  >
    {children}
  </div>
);
