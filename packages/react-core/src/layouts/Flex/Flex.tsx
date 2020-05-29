import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

import { formatBreakpointMods } from '../../helpers/util';
import { FlexBreakpointMod, FlexModifiers, FlexBreakpoints } from './FlexUtils';

export interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Flex layout */
  children?: React.ReactNode;
  /** additional classes added to the Flex layout */
  className?: string;
  /** An array of objects representing the various modifiers to apply to the flex component at various breakpoints */
  breakpointMods?: ({
    modifier: keyof typeof FlexModifiers,
    breakpoint?: keyof typeof FlexBreakpoints
  } | FlexBreakpointMod)[];
}

export const Flex: React.FunctionComponent<FlexProps> = ({
  children = null,
  className = '',
  breakpointMods,
  ...props
}: FlexProps) => (
  <div
    className={css(styles.flex, formatBreakpointMods(breakpointMods, styles), className)}
    {...props}
  >
    {children}
  </div>
);
