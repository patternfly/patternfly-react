import * as React from 'react';
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import { css } from '@patternfly/react-styles';
import { DeviceSizes } from '../../styles/sizes';
import {
  getOffsetKey,
  getOffsetModifier,
  getRowSpanKey,
  getRowSpanModifier,
  getSpanModifier,
  gridSpans
} from './gridUtils';

export type gridSpans = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridItemProps extends React.HTMLProps<HTMLDivElement> {
   /** content rendered inside the Grid Layout Item */
   children?: React.ReactNode;
   /** additional classes added to the Grid Layout Item */
   className?: string;
   /** the number of columns the grid item spans. Value should be a number 1-12   */
   span?: gridSpans;
   /** the number of rows the grid item spans. Value should be a number 1-12   */
   rowSpan?: gridSpans;
   /** the number of columns a grid item is offset */
   offset?: gridSpans;
   /** the number of columns the grid item spans on small device. Value should be a number 1-12   */
   sm?: gridSpans;
   /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
   smRowSpan?: gridSpans;
   /** the number of columns the grid item is offset on small device. Value should be a number 1-12   */
   smOffset?: gridSpans;
   /** the number of columns the grid item spans on medium device. Value should be a number 1-12   */
   md?: gridSpans;
   /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
   mdRowSpan?: gridSpans;
   /** the number of columns the grid item is offset on medium device. Value should be a number 1-12   */
   mdOffset?: gridSpans;
   /** the number of columns the grid item spans on large device. Value should be a number 1-12   */
   lg?: gridSpans;
   /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
   lgRowSpan?: gridSpans;
   /** the number of columns the grid item is offset on large device. Value should be a number 1-12   */
   lgOffset?: gridSpans;
   /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12   */
   xl?: gridSpans;
   /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
   xlRowSpan?: gridSpans;
   /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12   */
   xlOffset?: gridSpans;
   /** the number of columns the grid item spans on 2xLarge device. Value should be a number 1-12   */
   xl2?: gridSpans;
   /** the number of rows the grid item spans on 2xLarge device. Value should be a number 1-12   */
   xl2RowSpan?: gridSpans;
   /** the number of columns the grid item is offset on 2xLarge device. Value should be a number 1-12   */
   xl2Offset?: gridSpans;
}
export const GridItem: React.FunctionComponent<GridItemProps> = ({
  children = null,
  className = '',
  span = null,
  rowSpan = null,
  offset = null,
  sm = null,
  smRowSpan = null,
  smOffset = null,
  md = null,
  mdRowSpan = null,
  mdOffset = null,
  lg = null,
  lgRowSpan = null,
  lgOffset = null,
  xl = null,
  xlRowSpan = null,
  xlOffset = null,
  xl2 = null,
  xl2RowSpan = null,
  xl2Offset = null, 
  ...props
}: GridItemProps) => {
  const classes = [
    styles.gridItem,
    span && getSpanModifier(span),
    offset && getOffsetModifier(offset),
    rowSpan && getRowSpanModifier(rowSpan)
  ];

  Object.entries(DeviceSizes).forEach(([propKey, classModifier]) => {
    const spanValue = props[propKey];
    const rowSpanValue = props[getRowSpanKey(propKey)];
    const offsetValue = props[getOffsetKey(propKey)];

    if (spanValue) {
      classes.push(getSpanModifier(spanValue, classModifier));
    }
    if (rowSpanValue) {
      classes.push(getRowSpanModifier(rowSpanValue, classModifier));
    }
    if (offsetValue) {
      classes.push(getOffsetModifier(offsetValue, classModifier));
    }

    delete props[propKey];
    delete props[getRowSpanKey(propKey)];
    delete props[getOffsetKey(propKey)];
  });

  return (
    <div className={css(...classes, className)} {...props}>
      {children}
    </div>
  );
};