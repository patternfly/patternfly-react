import * as React from 'react';
import { RefObject } from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';
import { DataToolbarBreakpointMod } from './DataToolbarUtils';
import { formatBreakpointMods, toCamel } from '../../helpers/util';

export enum DataToolbarGroupVariant {
  'filter-group' = 'filter-group',
  'icon-button-group' = 'icon-button-group',
  'button-group' = 'button-group'
}

export interface DataToolbarGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  /** Classes applied to root element of the data toolbar group */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant?: DataToolbarGroupVariant | 'filter-group' | 'icon-button-group' | 'button-group';
  /** Array of objects representing the various modifiers to apply to the data toolbar group at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** Content to be rendered inside the data toolbar group */
  children?: React.ReactNode;
  /** Reference to pass to this group if it has .pf-m-chip-container modifier */
  innerRef?: RefObject<any>;
}

class DataToolbarGroupWithRef extends React.Component<DataToolbarGroupProps> {
  static defaultProps = {
    breakpointMods: [] as DataToolbarBreakpointMod[]
  };

  render() {
    const { breakpointMods, className, variant, children, innerRef, ...props } = this.props;
    return (
      <div
        className={css(
          styles.dataToolbarGroup,
          variant && styles.modifiers[toCamel(variant) as 'filterGroup' | 'iconButtonGroup' | 'buttonGroup'],
          formatBreakpointMods(breakpointMods, styles),
          className
        )}
        {...props}
        ref={innerRef}
      >
        {children}
      </div>
    );
  }
}

export const DataToolbarGroup = React.forwardRef((props: DataToolbarGroupProps, ref: any) => (
  <DataToolbarGroupWithRef {...props} innerRef={ref} />
));
