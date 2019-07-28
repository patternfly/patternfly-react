import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export default () => ({
  className: css(getModifier(styles, 'wrap'))
});
