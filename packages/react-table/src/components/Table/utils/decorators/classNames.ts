import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

const visibilityModifiers = [
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
] as (keyof typeof styles.modifiers)[];

interface Visibility {
  hidden?: string;
  hiddenOnSm?: string;
  hiddenOnMd?: string;
  hiddenOnLg?: string;
  hiddenOnXl?: string;
  hiddenOn2Xl?: string;
  visibleOnSm?: string;
  visibleOnMd?: string;
  visibleOnLg?: string;
  visibleOnXl?: string;
  visibleOn2Xl?: string;
}

export const Visibility = visibilityModifiers
  .filter(key => styles.modifiers[key])
  .reduce(
    (acc, curr) => {
      const key2 = curr.replace('_2xl', '2Xl') as keyof typeof Visibility;
      acc[key2] = styles.modifiers[curr];
      return acc;
    },
    {} as Visibility
  );

export const classNames = (...classes: string[]): ITransform => () => ({
  className: css(...classes)
});
