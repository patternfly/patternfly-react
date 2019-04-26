import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Table/table.css';

const pickProperties = (object, properties) =>
  properties.reduce((picked, property) => ({ ...picked, [property]: object[property] }), {});

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
