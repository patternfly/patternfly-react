import { css, pickProperties } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const Visibility = pickProperties(styles.modifiers, [
  'hidden',
  'hiddenOnSm',
  'hiddenOnMd',
  'hiddenOnLg',
  'hiddenOnXl',
  'visibleOnSm',
  'visibleOnMd',
  'visibleOnLg',
  'visibleOnXl'
]);

export default (...classNames) => () => ({
  className: css(...classNames)
});
