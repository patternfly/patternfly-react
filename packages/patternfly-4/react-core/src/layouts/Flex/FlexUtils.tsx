import * as React from 'react';
import { getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

export interface FlexBreakpointMod {
  /** The attribute to modify  */
  modifier:
    | 'flex'
    | 'inline-flex'
    | 'spacer-none'
    | 'spacer-xs'
    | 'spacer-sm'
    | 'spacer-md'
    | 'spacer-lg'
    | 'spacer-xl'
    | 'spacer-2xl'
    | 'spacer-3xl'
    | 'space-items-none'
    | 'space-items-xs'
    | 'space-items-sm'
    | 'space-items-md'
    | 'space-items-lg'
    | 'space-items-xl'
    | 'space-items-2xl'
    | 'space-items-3xl'
    | 'grow'
    | 'shrink'
    | 'flex-1'
    | 'flex-2'
    | 'flex-3'
    | 'flex-4'
    | 'flex-default'
    | 'flex-none'
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse'
    | 'wrap'
    | 'wrap-reverse'
    | 'nowrap'
    | 'align-right'
    | 'align-left'
    | 'align-self-flex-start'
    | 'align-self-flex-end'
    | 'align-self-flex-center'
    | 'align-self-flex-baseline'
    | 'align-self-flex-stretch'
    | 'justify-content-flex-end'
    | 'justify-content-center'
    | 'justify-content-flex-space-between'
    | 'justify-content-space-around'
    | 'justify-content-space-evenly'
    | 'justify-content-flex-start'
    | 'full-width'
    | 'align-items-flex-start'
    | 'align-items-flex-end'
    | 'align-items-center'
    | 'align-items-stretch'
    | 'align-items-baseline'
    | 'align-content-flex-start'
    | 'align-content-flex-end'
    | 'align-content-center'
    | 'align-content-stretch'
    | 'align-content-space-between'
    | 'align-content-space-around';
  /** The breakpoint at which to apply the modifier */
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface FlexItemBreakpointMod {
  /** The attribute to modify  */
  modifier:
    | 'spacer-none'
    | 'spacer-xs'
    | 'spacer-sm'
    | 'spacer-md'
    | 'spacer-lg'
    | 'spacer-xl'
    | 'spacer-2xl'
    | 'spacer-3xl'
    | 'grow'
    | 'shrink'
    | 'flex-1'
    | 'flex-2'
    | 'flex-3'
    | 'flex-4'
    | 'flex-default'
    | 'flex-none'
    | 'align-right'
    | 'align-left'
    | 'align-self-flex-start'
    | 'align-self-flex-end'
    | 'align-self-flex-center'
    | 'align-self-flex-baseline'
    | 'align-self-flex-stretch'
    | 'full-width';
  /** The breakpoint at which to apply the modifier */
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
