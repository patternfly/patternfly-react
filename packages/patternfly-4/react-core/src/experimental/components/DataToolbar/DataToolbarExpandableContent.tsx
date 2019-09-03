import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import { DataToolbarBreakpointMod, formatBreakpointMods } from './DataToolbarUtils';

export interface DataToolbarExpandableContentProps extends React.HTMLProps<HTMLDivElement> {
  /** TODO */
  className?: string;
  /** TODO */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** TODO */
  isExpanded?: boolean;
  /** TODO */
  children?: React.ReactNode;
}

export const DataToolbarExplandableContent: React.FunctionComponent<DataToolbarExpandableContentProps> = ({
    className,
    breakpointMods = [] as DataToolbarBreakpointMod[],
    isExpanded = false,
    children,
    ...props
  }: DataToolbarExpandableContentProps) => {

  return (
    <div className={css(styles.dataToolbarExpandableContent,
      formatBreakpointMods(breakpointMods),
      isExpanded && getModifier(styles, 'expanded'),
      className)} {...props}>
      {children}
    </div>
  );
};
