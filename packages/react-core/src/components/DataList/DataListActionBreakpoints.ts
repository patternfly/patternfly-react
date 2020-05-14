export enum DataListActionModifiers {
  hidden = 'hidden',
  visible = 'visible'
}

export enum DataListActionBreakpoints {
  md = 'Md',
  lg = 'Lg',
  xl = 'Xl',
  '2xl' = '2Xl'
}

export interface DataListActionBreakpointMod {
  /** The attribute to modify  */
  modifier: 'hidden' | 'visible' | keyof typeof DataListActionModifiers;
  /** The breakpoint at which to apply the modifier */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl' | keyof typeof DataListActionBreakpoints;
}
