import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

type WidthClass = 'width_10' | 'width_15' | 'width_20' | 'width_25' | 'width_30' | 'width_35' | 'width_40' | 'width_45' | 'width_50' | 'width_60' | 'width_70' | 'width_80' | 'width_90' | 'widthMax';

export const cellWidth = (width: 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 'Max'): ITransform => () => ({
  className: css(styles.modifiers[typeof width === 'number' ? `width_${width}` as WidthClass: `width${width}` as WidthClass])
});
