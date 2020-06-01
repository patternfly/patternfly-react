import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

import { formatBreakpointMods } from '../../helpers/util';

export interface FlexItemProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Flex layout */
  children?: React.ReactNode;
  /** additional classes added to the Flex layout */
  className?: string;
  /** Spacers at various breakpoints */
  spacer?: {
    default?:
      | 'spacerNone'
      | 'spacerXs'
      | 'spacerSm'
      | 'spacerMd'
      | 'spacerLg'
      | 'spacerXl'
      | 'spacer2xl'
      | 'spacer3xl'
      | 'spacer4xl';
    sm?:
      | 'spacerNone'
      | 'spacerXs'
      | 'spacerSm'
      | 'spacerMd'
      | 'spacerLg'
      | 'spacerXl'
      | 'spacer2xl'
      | 'spacer3xl'
      | 'spacer4xl';
    md?:
      | 'spacerNone'
      | 'spacerXs'
      | 'spacerSm'
      | 'spacerMd'
      | 'spacerLg'
      | 'spacerXl'
      | 'spacer2xl'
      | 'spacer3xl'
      | 'spacer4xl';
    lg?:
      | 'spacerNone'
      | 'spacerXs'
      | 'spacerSm'
      | 'spacerMd'
      | 'spacerLg'
      | 'spacerXl'
      | 'spacer2xl'
      | 'spacer3xl'
      | 'spacer4xl';
    xl?:
      | 'spacerNone'
      | 'spacerXs'
      | 'spacerSm'
      | 'spacerMd'
      | 'spacerLg'
      | 'spacerXl'
      | 'spacer2xl'
      | 'spacer3xl'
      | 'spacer4xl';
    '2xl'?:
      | 'spacerNone'
      | 'spacerXs'
      | 'spacerSm'
      | 'spacerMd'
      | 'spacerLg'
      | 'spacerXl'
      | 'spacer2xl'
      | 'spacer3xl'
      | 'spacer4xl';
  };
  /** Whether to add flex: grow at various breakpoints */
  grow?: {
    default?: 'grow';
    sm?: 'grow';
    md?: 'grow';
    lg?: 'grow';
    xl?: 'grow';
    '2xl'?: 'grow';
  };
  /** Whether to add flex: shrink at various breakpoints */
  shrink?: {
    default?: 'shrink';
    sm?: 'shrink';
    md?: 'shrink';
    lg?: 'shrink';
    xl?: 'shrink';
    '2xl'?: 'shrink';
  };
  /** Value to add for flex property at various breakpoints */
  flex?: {
    default?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    sm?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    md?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    lg?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    xl?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    '2xl'?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
  };
  /** Value to add for align-self property at various breakpoints */
  alignSelf?: {
    default?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';
    sm?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';
    md?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';
    lg?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';
    xl?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';
    '2xl'?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';
  };
  /** Value to use for margin: auto at various breakpoints */
  align?: {
    default?: 'alignLeft' | 'alignRight';
    sm?: 'alignLeft' | 'alignRight';
    md?: 'alignLeft' | 'alignRight';
    lg?: 'alignLeft' | 'alignRight';
    xl?: 'alignLeft' | 'alignRight';
    '2xl'?: 'alignLeft' | 'alignRight';
  };
  /** Whether to set width: 100% at various breakpoints */
  fullWidth?: {
    default?: 'fullWidth';
    sm?: 'fullWidth';
    md?: 'fullWidth';
    lg?: 'fullWidth';
    xl?: 'fullWidth';
    '2xl'?: 'fullWidth';
  };
}

export const FlexItem: React.FunctionComponent<FlexItemProps> = ({
  children = null,
  className = '',
  spacer,
  grow,
  shrink,
  flex,
  alignSelf,
  align,
  fullWidth,
  ...props
}: FlexItemProps) => (
  <div
    {...props}
    className={css(
      formatBreakpointMods(spacer, styles),
      formatBreakpointMods(grow, styles),
      formatBreakpointMods(shrink, styles),
      formatBreakpointMods(flex, styles),
      formatBreakpointMods(alignSelf, styles),
      formatBreakpointMods(align, styles),
      formatBreakpointMods(fullWidth, styles),
      className
    )}
  >
    {children}
  </div>
);
