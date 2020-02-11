import { css, pickProperties } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

export const Visibility = pickProperties(styles.modifiers, [
  'hidden',
  'hiddenOnSm',
  'hiddenOnMd',
  'hiddenOnLg',
  'hiddenOnXl',
  'hiddenOn_2xl',
  'visibleOnSm',
  'visibleOnMd',
  'visibleOnLg',
  'visibleOnXl',
  'visibleOn_2xl'
]);

// eslint-disable-next-line no-shadow
export const classNames = (...classNames: string[]): ITransform => () => ({
  className: css(...classNames)
});
