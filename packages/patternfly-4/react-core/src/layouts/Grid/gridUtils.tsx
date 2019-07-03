import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import { getModifier } from '@patternfly/react-styles';
import { OneOf } from '../../helpers/typeUtils';
import { DeviceSizes } from '../../styles/sizes';

export const gridSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const getRowSpanKey = (size: string) => `${size}RowSpan` as string;

export const getOffsetKey = (size: string) => `${size}Offset` as string;

export const getSizeSuffix = (size: string) => (size ? `-on-${size}` : '') as string;

export const getSpanModifier = (value: number, size: 'sm' | 'md' | 'lg' | 'xl' | 'xl2') => getModifier(styles, `${value}-col${getSizeSuffix(size)}`);

export const getGridSpanModifier = (value: number, size: 'sm' | 'md' | 'lg' | 'xl' | 'xl2') => getModifier(styles, `-all-${value}-col${getSizeSuffix(size)}`);

export const getRowSpanModifier = (value: number, size: 'sm' | 'md' | 'lg' | 'xl' | 'xl2') => getModifier(styles, `${value}-row${getSizeSuffix(size)}`);

export const getOffsetModifier = (value: number, size: 'sm' | 'md' | 'lg' | 'xl' | 'xl2') => getModifier(styles, `offset-${value}-col${getSizeSuffix(size)}`);
