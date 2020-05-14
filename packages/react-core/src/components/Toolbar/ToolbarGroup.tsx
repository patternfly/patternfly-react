import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { ToolbarBreakpointMod } from './ToolbarUtils';
import { formatBreakpointMods, toCamel } from '../../helpers/util';

export enum ToolbarGroupVariant {
  'filter-group' = 'filter-group',
  'icon-button-group' = 'icon-button-group',
  'button-group' = 'button-group'
}

export interface ToolbarGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  /** Classes applied to root element of the data toolbar group */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant?: ToolbarGroupVariant | 'filter-group' | 'icon-button-group' | 'button-group';
  /** Array of objects representing the various modifiers to apply to the data toolbar group at various breakpoints */
  breakpointMods?: ToolbarBreakpointMod[];
  /** Content to be rendered inside the data toolbar group */
  children?: React.ReactNode;
  /** Reference to pass to this group if it has .pf-m-chip-container modifier */
  innerRef?: React.RefObject<any>;
}

class ToolbarGroupWithRef extends React.Component<ToolbarGroupProps> {
  static defaultProps = {
    breakpointMods: [] as ToolbarBreakpointMod[]
  };

  render() {
    const { breakpointMods, className, variant, children, innerRef, ...props } = this.props;
    return (
      <div
        className={css(
          styles.toolbarGroup,
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

export const ToolbarGroup = React.forwardRef((props: ToolbarGroupProps, ref: any) => (
  <ToolbarGroupWithRef {...props} innerRef={ref} />
));
