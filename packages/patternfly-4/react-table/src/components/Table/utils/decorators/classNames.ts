import { css, pickProperties } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

export const Visibility = pickProperties(styles.modifiers, [
  'hidden',
  'hiddenOnSm',
  'hiddenOnMd',
  'hiddenOnLg',
  'hiddenOnXl',
  'hiddenOn2Xl',
  'visibleOnSm',
  'visibleOnMd',
  'visibleOnLg',
  'visibleOnXl',
  'visibleOn2Xl'
]);

// tslint:disable-next-line:no-shadowed-variable
export const classNames = (...classNames: string[]): ITransform => () => ({
  className: css(...classNames)
});
