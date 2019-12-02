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

// tslint:disable-next-line:no-shadowed-variable
export const classNames = (...classNames: string[]): ITransform => () => ({
  className: css(...classNames)
});
