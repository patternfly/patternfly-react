import * as React from 'react';
import { getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

export enum FlexModifiers {
  flex = 'flex',
  'inline-flex' = 'inline-flex',
  'spacer-none' = 'spacer-none',
  'spacer-xs' = 'spacer-xs',
  'spacer-sm' = 'spacer-sm',
  'spacer-md' = 'spacer-md',
  'spacer-lg' = 'spacer-lg',
  'spacer-xl' = 'spacer-xl',
  'spacer-2xl' = 'spacer-2xl',
  'spacer-3xl' = 'spacer-3xl',
  'space-items-none' = 'space-items-none',
  'space-items-xs' = 'space-items-xs',
  'space-items-sm' = 'space-items-sm',
  'space-items-md' = 'space-items-md',
  'space-items-lg' = 'space-items-lg',
  'space-items-xl' = 'space-items-xl',
  'space-items-2xl' = 'space-items-2xl',
  'space-items-3xl' = 'space-items-3xl',
  grow = 'grow',
  shrink = 'shrink',
  'flex-1' = 'flex-1',
  'flex-2' = 'flex-2',
  'flex-3' = 'flex-3',
  'flex-4' = 'flex-4',
  'flex-default' = 'flex-default',
  'flex-none' = 'flex-none',
  column = 'column',
  'column-reverse' = 'column-reverse',
  row = 'row',
  'row-reverse' = 'row-reverse',
  wrap = 'wrap',
  'wrap-reverse' = 'wrap-reverse',
  nowrap = 'nowrap',
  'align-right' = 'align-right',
  'align-left' = 'align-left',
  'align-self-flex-start' = 'align-self-flex-start',
  'align-self-flex-end' = 'align-self-flex-end',
  'align-self-flex-center' = 'align-self-flex-center',
  'align-self-flex-baseline' = 'align-self-flex-baseline',
  'align-self-flex-stretch' = 'align-self-flex-stretch',
  'justify-content-flex-end' = 'justify-content-flex-end',
  'justify-content-center' = 'justify-content-center',
  'justify-content-flex-space-between' = 'justify-content-flex-space-between',
  'justify-content-space-around' = 'justify-content-space-around',
  'justify-content-space-evenly' = 'justify-content-space-evenly',
  'justify-content-flex-start' = 'justify-content-flex-start',
  'full-width' = 'full-width',
  'align-items-flex-start' = 'align-items-flex-start',
  'align-items-flex-end' = 'align-items-flex-end',
  'align-items-center' = 'align-items-center',
  'align-items-stretch' = 'align-items-stretch',
  'align-items-baseline' = 'align-items-baseline',
  'align-content-flex-start' = 'align-content-flex-start',
  'align-content-flex-end' = 'align-content-flex-end',
  'align-content-center' = 'align-content-center',
  'align-content-stretch' = 'align-content-stretch',
  'align-content-space-between' = 'align-content-space-between',
  'align-content-space-around' = 'align-content-space-around'
}

export enum FlexItemModifiers {
  'spacer-none' = 'spacer-none',
  'spacer-xs' = 'spacer-xs',
  'spacer-sm' = 'spacer-sm',
  'spacer-md' = 'spacer-md',
  'spacer-lg' = 'spacer-lg',
  'spacer-xl' = 'spacer-xl',
  'spacer-2xl' = 'spacer-2xl',
  'spacer-3xl' = 'spacer-3xl',
  grow = 'grow',
  shrink = 'shrink',
  'flex-1' = 'flex-1',
  'flex-2' = 'flex-2',
  'flex-3' = 'flex-3',
  'flex-4' = 'flex-4',
  'flex-default' = 'flex-default',
  'flex-none' = 'flex-none',
  'align-right' = 'align-right',
  'align-left' = 'align-left',
  'align-self-flex-start' = 'align-self-flex-start',
  'align-self-flex-end' = 'align-self-flex-end',
  'align-self-flex-center' = 'align-self-flex-center',
  'align-self-flex-baseline' = 'align-self-flex-baseline',
  'align-self-flex-stretch' = 'align-self-flex-stretch',
  'full-width' = 'full-width'
}

export enum FlexBreakpoints {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl'
}

export interface FlexBreakpointMod {
  /** The attribute to modify  */
  modifier: keyof typeof FlexModifiers;
  /** The breakpoint at which to apply the modifier */
  breakpoint?: keyof typeof FlexBreakpoints;
}

export interface FlexItemBreakpointMod {
  /** The attribute to modify  */
  modifier: keyof typeof FlexItemModifiers;
  /** The breakpoint at which to apply the modifier */
  breakpoint?: FlexBreakpoints;
}
