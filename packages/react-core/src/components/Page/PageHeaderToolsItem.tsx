import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { PageHeaderToolsBreakpointMod } from './PageHeaderTools';
import { formatBreakpointMods } from '../../helpers/util';

export interface PageHeaderToolsItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in page header tools item. */
  children: React.ReactNode;
  /** Additional classes added to the page header tools item. */
  className?: string;
  /** An array of breakpoint modifiers to control visibility, e.g. breakpointMods={[{ modifier: 'hidden' }, { modifier: 'visible', breakpoint: 'md' }]} */
  breakpointMods?: PageHeaderToolsBreakpointMod[];
  /** True to make an icon button appear selected */
  isSelected?: boolean;
}

export const PageHeaderToolsItem: React.FunctionComponent<PageHeaderToolsItemProps> = ({
  children,
  className,
  breakpointMods,
  isSelected
}: PageHeaderToolsItemProps) => (
  <div
    className={css(
      styles.pageHeaderToolsItem,
      isSelected && styles.modifiers.selected,
      breakpointMods && formatBreakpointMods(breakpointMods, styles),
      className
    )}
  >
    {children}
  </div>
);
