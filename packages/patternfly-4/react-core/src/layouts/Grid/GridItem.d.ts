import { HTMLProps, SFC } from 'react';

type GridItemSpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridItemProps extends HTMLProps<HTMLDivElement> {
  span?: GridItemSpanValue;
  rowSpan?: GridItemSpanValue;
  offset?: GridItemSpanValue;
  sm?: GridItemSpanValue;
  smRowSpan?: GridItemSpanValue;
  smOffset?: GridItemSpanValue;
  md?: GridItemSpanValue;
  mdRowSpan?: GridItemSpanValue;
  mdOffset?: GridItemSpanValue;
  lg?: GridItemSpanValue;
  lgRowSpan?: GridItemSpanValue;
  lgOffset?: GridItemSpanValue;
  xl?: GridItemSpanValue;
  xlRowSpan?: GridItemSpanValue;
  xlOffset?: GridItemSpanValue;
}

declare const GridItem: SFC<GridItemProps>;

export default GridItem;
