import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const wrappable = () => ({
  className: css(getModifier(styles, 'wrap'))
});