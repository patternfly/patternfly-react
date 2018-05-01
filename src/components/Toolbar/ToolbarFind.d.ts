import { ComponentClass } from 'react';

export interface ToolbarFindProps {
  /** total number of items */
  totalCount: number;
  /** Additional css classes */
  className?: string;
  /** index of current item */
  currentIndex?: number;
  /** Callback function when the find value changes */
  onChange?(value: string): void;
  /** Callback function when user hits the enter key */
  onEnter?(currentValue: string): void;
  /** Callback function when the find next is selected */
  onFindNext?(currentValue: string): void;
  /** Callback function when the find previous is selected */
  onFindPrevious?(currentValue: string): void;
  /** Placeholder text when empty */
  placeholder?: string;
}

declare const ToolbarFind: ComponentClass<ToolbarFindProps>;

export default ToolbarFind;
