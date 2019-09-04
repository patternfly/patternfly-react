import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';

import { DataToolbarBreakpointMod, formatBreakpointMods } from './DataToolbarUtils';

export interface DataToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
  /** TODO */
  className?: string;
  /** TODO */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** TODO */
  items?: React.ReactNode;
}

export const DataToolbarContent: React.FunctionComponent<DataToolbarContentProps> = ({
    className,
    items,
    breakpointMods = [] as DataToolbarBreakpointMod[],
    ...props
  }: DataToolbarContentProps) => {

  return (
    <div className={css(styles.dataToolbarContent,
      formatBreakpointMods(breakpointMods),
      className)} {...props}>
      {items}
    </div>
  );
};
