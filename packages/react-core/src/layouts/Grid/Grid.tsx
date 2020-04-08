import * as React from 'react';
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import { css } from '@patternfly/react-styles';
import { DeviceSizes } from '../../styles/sizes';

export type gridItemSpanValueShape = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Grid layout */
  children?: React.ReactNode;
  /** additional classes added to the Grid layout */
  className?: string;
  /** Adds space between children. */
  hasGutter?: boolean;
  /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
  span?: gridItemSpanValueShape;
  /** the number of columns all grid items should span on a small device */
  sm?: gridItemSpanValueShape;
  /** the number of columns all grid items should span on a medium device */
  md?: gridItemSpanValueShape;
  /** the number of columns all grid items should span on a large device */
  lg?: gridItemSpanValueShape;
  /** the number of columns all grid items should span on a xLarge device */
  xl?: gridItemSpanValueShape;
  /** the number of columns all grid items should span on a 2xLarge device */
  xl2?: gridItemSpanValueShape;
}

export const Grid: React.FunctionComponent<GridProps> = ({
  children = null,
  className = '',
  hasGutter,
  span = null,
  ...props
}: GridProps) => {
  const classes = [styles.grid, span && styles.modifiers[`all_${span}Col` as keyof typeof styles.modifiers]];

  Object.entries(DeviceSizes).forEach(([propKey, gridSpanModifier]) => {
    const key = propKey as keyof typeof DeviceSizes;
    const propValue = props[key] as gridItemSpanValueShape;
    if (propValue) {
      classes.push(styles.modifiers[`all_${propValue}ColOn${gridSpanModifier}` as keyof typeof styles.modifiers]);
    }
    delete props[key];
  });

  return (
    <div className={css(...classes, hasGutter && styles.modifiers.gutter, className)} {...props}>
      {children}
    </div>
  );
};
