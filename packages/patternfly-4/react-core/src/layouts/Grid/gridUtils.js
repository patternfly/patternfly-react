import styles from '@patternfly/patternfly-next/layouts/Grid/grid.css';
import { getModifier } from '@patternfly/react-styles';

export const gridSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const getRowSpanKey = size => `${size}RowSpan`;

export const getOffsetKey = size => `${size}Offset`;

export const getSizeSuffix = size => (size ? `-on-${size}` : '');

export const getSpanModifier = (value, size) => getModifier(styles, `${value}-col${getSizeSuffix(size)}`);

export const getGridSpanModifier = (value, size) => getModifier(styles, `-all-${value}-col${getSizeSuffix(size)}`);

export const getRowSpanModifier = (value, size) => getModifier(styles, `${value}-row${getSizeSuffix(size)}`);

export const getOffsetModifier = (value, size) => getModifier(styles, `offset-${value}-col${getSizeSuffix(size)}`);
