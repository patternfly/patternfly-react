import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

import { formatBreakpointMods } from '../../helpers/util';

export interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Flex layout */
  children?: React.ReactNode;
  /** additional classes added to the Flex layout */
  className?: string;
  /** Spacers at various breakpoints */
  spacer?: {
    default?: 'spacerNone' | 'spacer-xs' | 'spacerSm' | 'spacerMd' | 'spacerLg' | 'spacerXl' | 'spacer_2xl' | 'spacer_3xl' | 'spacer_4xl';
    sm?: 'spacerNone' | 'spacer-xs' | 'spacerSm' | 'spacerMd' | 'spacerLg' | 'spacerXl' | 'spacer_2xl' | 'spacer_3xl' | 'spacer_4xl';
    md?: 'spacerNone' | 'spacer-xs' | 'spacerSm' | 'spacerMd' | 'spacerLg' | 'spacerXl' | 'spacer_2xl' | 'spacer_3xl' | 'spacer_4xl';
    lg?: 'spacerNone' | 'spacer-xs' | 'spacerSm' | 'spacerMd' | 'spacerLg' | 'spacerXl' | 'spacer_2xl' | 'spacer_3xl' | 'spacer_4xl';
    xl?: 'spacerNone' | 'spacer-xs' | 'spacerSm' | 'spacerMd' | 'spacerLg' | 'spacerXl' | 'spacer_2xl' | 'spacer_3xl' | 'spacer_4xl';
    '2xl'?: 'spacerNone' | 'spacer-xs' | 'spacerSm' | 'spacerMd' | 'spacerLg' | 'spacerXl' | 'spacer_2xl' | 'spacer_3xl' | 'spacer_4xl';
  };
  /** Space items at various breakpoints */
  spaceItems?: {
    default?: 'spaceItemsNone' | 'spaceItemsXs' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg' | 'spaceItemsXl' | 'spaceItems_2xl' | 'spaceItems_3xl' | 'spaceItems_4xl';
    sm?: 'spaceItemsNone' | 'spaceItemsXs' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg' | 'spaceItemsXl' | 'spaceItems_2xl' | 'spaceItems_3xl' | 'spaceItems_4xl';
    md?: 'spaceItemsNone' | 'spaceItemsXs' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg' | 'spaceItemsXl' | 'spaceItems_2xl' | 'spaceItems_3xl' | 'spaceItems_4xl';
    lg?: 'spaceItemsNone' | 'spaceItemsXs' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg' | 'spaceItemsXl' | 'spaceItems_2xl' | 'spaceItems_3xl' | 'spaceItems_4xl';
    xl?: 'spaceItemsNone' | 'spaceItemsXs' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg' | 'spaceItemsXl' | 'spaceItems_2xl' | 'spaceItems_3xl' | 'spaceItems_4xl';
    '2xl'?: 'spaceItemsNone' | 'spaceItemsXs' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg' | 'spaceItemsXl' | 'spaceItems_2xl' | 'spaceItems_3xl' | 'spaceItems_4xl';
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
    default?: 'default' | 'none' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    sm?: 'default' | 'none' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    md?: 'default' | 'none' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    lg?: 'default' | 'none' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    xl?: 'default' | 'none' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
    '2xl'?: 'default' | 'none' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';
  };
  /** Value to add for flex-direction property at various breakpoints */
  direction?: {
    default?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
    sm?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
    md?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
    lg?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
    xl?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
    '2xl'?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
  };
  /** Value to add for align-items property at various breakpoints */
  alignItems?: {
    default?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';
    sm?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';
    md?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';
    lg?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';
    xl?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';
    '2xl'?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';
  };
  /** Value to add for align-content property at various breakpoints */
  alignContent?: {
    default?: 'alignContentFlextStart' | 'alignContentFlexEnd' | 'alignContentCenter' | 'alignContentStretch' | 'alignContentSpaceBetween' | 'alignContentSpaceAround';
    sm?: 'alignContentFlextStart' | 'alignContentFlexEnd' | 'alignContentCenter' | 'alignContentStretch' | 'alignContentSpaceBetween' | 'alignContentSpaceAround';
    md?: 'alignContentFlextStart' | 'alignContentFlexEnd' | 'alignContentCenter' | 'alignContentStretch' | 'alignContentSpaceBetween' | 'alignContentSpaceAround';
    lg?: 'alignContentFlextStart' | 'alignContentFlexEnd' | 'alignContentCenter' | 'alignContentStretch' | 'alignContentSpaceBetween' | 'alignContentSpaceAround';
    xl?: 'alignContentFlextStart' | 'alignContentFlexEnd' | 'alignContentCenter' | 'alignContentStretch' | 'alignContentSpaceBetween' | 'alignContentSpaceAround';
    '2xl'?: 'alignContentFlextStart' | 'alignContentFlexEnd' | 'alignContentCenter' | 'alignContentStretch' | 'alignContentSpaceBetween' | 'alignContentSpaceAround';
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
  /** Value to add for justify-content property at various breakpoints */
  justifyContent?: {
    default?: 'justifyContentFlextStart' | 'justifyContentFlexEnd' | 'justifyContentCenter' | 'justifyContentStretch' | 'justifyContentSpaceBetween' | 'justifyContentSpaceAround' | 'justifyContentSpaceEvenly';
    sm?: 'justifyContentFlextStart' | 'justifyContentFlexEnd' | 'justifyContentCenter' | 'justifyContentStretch' | 'justifyContentSpaceBetween' | 'justifyContentSpaceAround' | 'justifyContentSpaceEvenly';
    md?: 'justifyContentFlextStart' | 'justifyContentFlexEnd' | 'justifyContentCenter' | 'justifyContentStretch' | 'justifyContentSpaceBetween' | 'justifyContentSpaceAround' | 'justifyContentSpaceEvenly';
    lg?: 'justifyContentFlextStart' | 'justifyContentFlexEnd' | 'justifyContentCenter' | 'justifyContentStretch' | 'justifyContentSpaceBetween' | 'justifyContentSpaceAround' | 'justifyContentSpaceEvenly';
    xl?: 'justifyContentFlextStart' | 'justifyContentFlexEnd' | 'justifyContentCenter' | 'justifyContentStretch' | 'justifyContentSpaceBetween' | 'justifyContentSpaceAround' | 'justifyContentSpaceEvenly';
    '2xl'?: 'justifyContentFlextStart' | 'justifyContentFlexEnd' | 'justifyContentCenter' | 'justifyContentStretch' | 'justifyContentSpaceBetween' | 'justifyContentSpaceAround' | 'justifyContentSpaceEvenly';
  };
  /** Value to set to display property at various breakpoints */
  display?: {
    default?: 'inlineFlex';
    sm?: 'flex' | 'inlineFlex';
    md?: 'flex' | 'inlineFlex';
    lg?: 'flex' | 'inlineFlex';
    xl?: 'flex' | 'inlineFlex';
    '2xl'?: 'flex' | 'inlineFlex';
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
  /** Value to set for flex-wrap property at various breakpoints */
  flexWrap?: {
    default?: 'wrap' | 'wrapReverse' | 'noWrap';
    sm?: 'wrap' | 'wrapReverse' | 'noWrap';
    md?: 'wrap' | 'wrapReverse' | 'noWrap';
    lg?: 'wrap' | 'wrapReverse' | 'noWrap';
    xl?: 'wrap' | 'wrapReverse' | 'noWrap';
    '2xl'?: 'wrap' | 'wrapReverse' | 'noWrap';
  };
}

export const Flex: React.FunctionComponent<FlexProps> = ({
  children = null,
  className = '',
  spacer,
  spaceItems,
  grow,
  shrink,
  flex,
  direction,
  alignItems,
  alignContent,
  alignSelf,
  align,
  justifyContent,
  display,
  fullWidth,
  flexWrap,
  ...props
}: FlexProps) => (
  <div
    className={css(
      styles.flex,
      formatBreakpointMods(spacer, styles),
      formatBreakpointMods(spaceItems, styles),
      formatBreakpointMods(grow, styles),
      formatBreakpointMods(shrink, styles),
      formatBreakpointMods(flex, styles),
      formatBreakpointMods(direction, styles),
      formatBreakpointMods(alignItems, styles),
      formatBreakpointMods(alignContent, styles),
      formatBreakpointMods(alignSelf, styles),
      formatBreakpointMods(align, styles),
      formatBreakpointMods(justifyContent, styles),
      formatBreakpointMods(display, styles),
      formatBreakpointMods(fullWidth, styles),
      formatBreakpointMods(flexWrap, styles),
      className
    )}
    {...props}
  >
    {children}
  </div>
);
