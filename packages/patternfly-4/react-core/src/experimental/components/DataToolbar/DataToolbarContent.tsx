import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';

import { DataToolbarBreakpointMod, formatBreakpointMods } from './DataToolbarUtils';

export interface DataToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar content row */
  className?: string;
  /** An array of objects representing the various modifiers to apply to the content row at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** An array of ReactNodes to be rendered as children of the content row */
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
