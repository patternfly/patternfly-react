import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../helpers/util';

export interface PageHeaderToolsBreakpointMod {
  /** The attribute to modify  */
  modifier: 'hidden' | 'visible';
  /** The breakpoint at which to apply the modifier */
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface PageHeaderToolsGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in the page header tools group */
  children: React.ReactNode;
  /** Additional classes added to the page header tools group. */
  className?: string;
  /** An array of breakpoint modifiers to control visibility, e.g. breakpointMods={[{ modifier: 'hidden' }, { modifier: 'visible', breakpoint: 'md' }]} */
  breakpointMods?: (
    | {
        modifier: 'hidden' | 'visible';
        breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
      }
    | PageHeaderToolsBreakpointMod)[];
}

export const PageHeaderToolsGroup: React.FunctionComponent<PageHeaderToolsGroupProps> = ({
  children,
  className,
  breakpointMods,
  ...props
}: PageHeaderToolsGroupProps) => (
  <div className={css(styles.pageHeaderToolsGroup, formatBreakpointMods(breakpointMods, styles), className)} {...props}>
    {children}
  </div>
);
