export enum FlexModifiers {
  flex = 'flex',
  'inline-flex' = 'inline-flex',
  'spacerNone' = 'spacerNone',
  'spacer-xs' = 'spacer-xs',
  'spacerSm' = 'spacerSm',
  'spacerMd' = 'spacerMd',
  'spacerLg' = 'spacerLg',
  'spacerXl' = 'spacerXl',
  'spacer_2xl' = 'spacer_2xl',
  'spacer_3xl' = 'spacer_3xl',
  'spaceItemsNone' = 'spaceItemsNone',
  'spaceItemsXs' = 'spaceItemsXs',
  'spaceItemsSm' = 'spaceItemsSm',
  'spaceItemsMd' = 'spaceItemsMd',
  'spaceItemsLg' = 'spaceItemsLg',
  'spaceItemsXl' = 'spaceItemsXl',
  'spaceItems_2xl' = 'spaceItems_2xl',
  'spaceItems_3xl' = 'spaceItems_3xl',
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
  'alignRight' = 'alignRight',
  'alignLeft' = 'alignLeft',
  'align-self-flex-start' = 'align-self-flex-start',
  'align-self-flex-end' = 'align-self-flex-end',
  'align-self-center' = 'align-self-center',
  'align-self-baseline' = 'align-self-baseline',
  'align-self-stretch' = 'align-self-stretch',
  'justify-content-flex-end' = 'justify-content-flex-end',
  'justify-content-center' = 'justify-content-center',
  'justify-content-space-between' = 'justify-content-space-between',
  'justify-content-space-around' = 'justify-content-space-around',
  'justify-content-space-evenly' = 'justify-content-space-evenly',
  'justify-content-flex-start' = 'justify-content-flex-start',
  'full-width' = 'full-width',
  'align-items-flex-start' = 'align-items-flex-start',
  'align-items-flex-end' = 'align-items-flex-end',
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
  'spacerNone' = 'spacerNone',
  'spacer-xs' = 'spacer-xs',
  'spacerSm' = 'spacerSm',
  'spacerMd' = 'spacerMd',
  'spacerLg' = 'spacerLg',
  'spacerXl' = 'spacerXl',
  'spacer_2xl' = 'spacer_2xl',
  'spacer_3xl' = 'spacer_3xl',
  grow = 'grow',
  shrink = 'shrink',
  'flex-1' = 'flex-1',
  'flex-2' = 'flex-2',
  'flex-3' = 'flex-3',
  'flex-4' = 'flex-4',
  'flex-default' = 'flex-default',
  'flex-none' = 'flex-none',
  'alignRight' = 'alignRight',
  'alignLeft' = 'alignLeft',
  'align-self-flex-start' = 'align-self-flex-start',
  'align-self-flex-end' = 'align-self-flex-end',
  'align-self-center' = 'align-self-center',
  'align-self-baseline' = 'align-self-baseline',
  'align-self-stretch' = 'align-self-stretch',
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
  breakpoint?: keyof typeof FlexBreakpoints;
}
