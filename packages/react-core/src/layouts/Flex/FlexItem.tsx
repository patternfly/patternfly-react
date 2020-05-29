import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

import { FlexItemBreakpointMod, FlexItemModifiers, FlexBreakpoints } from './FlexUtils';
import { formatBreakpointMods } from '../../helpers/util';

export interface FlexItemProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Flex layout */
  children?: React.ReactNode;
  /** additional classes added to the Flex layout */
  className?: string;
  /** An array of objects representing the various modifiers to apply to the flex item at various breakpoints */
  breakpointMods?: (
    | {
        modifier: keyof typeof FlexItemModifiers;
        breakpoint?: keyof typeof FlexBreakpoints;
      }
    | FlexItemBreakpointMod)[];
}

export const FlexItem: React.FunctionComponent<FlexItemProps> = ({
  children = null,
  className = '',
  breakpointMods,
  ...props
}: FlexItemProps) => (
  <div {...props} className={css(formatBreakpointMods(breakpointMods, styles), className)}>
    {children}
  </div>
);
