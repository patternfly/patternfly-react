import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export default width => () => ({
  className: css(getModifier(styles, `width-${width}`))
});
