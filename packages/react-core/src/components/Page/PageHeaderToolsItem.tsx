import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { PageHeaderToolsBreakpointMod } from './PageHeaderTools';
import { formatBreakpointMods } from '../../helpers/util';

interface InjectedPageHeaderToolsItemProps {
  selectedClass: string;
}

export interface PageHeaderToolsItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in page header tools item. If you need the selected class, use the render prop instead */
  children?: React.ReactNode;
  /** If you need the selected class, use this render prop instead of children */
  render?: (props: InjectedPageHeaderToolsItemProps) => React.ReactNode;
  /** Additional classes added to the page header tools item. */
  className?: string;
  /** An array of breakpoint modifiers to control visibility, e.g. breakpointMods={[{ modifier: 'hidden' }, { modifier: 'visible', breakpoint: 'md' }]} */
  breakpointMods?: PageHeaderToolsBreakpointMod[];
}

export const PageHeaderToolsItem: React.FunctionComponent<PageHeaderToolsItemProps> = ({
  children,
  render,
  className,
  breakpointMods
}: PageHeaderToolsItemProps) => (
  <div
    className={css(
      styles.pageHeaderToolsItem,
      breakpointMods && formatBreakpointMods(breakpointMods, styles),
      className
    )}
  >
    {children}
    {render && render({ selectedClass: styles.modifiers.selected })}
  </div>
);
