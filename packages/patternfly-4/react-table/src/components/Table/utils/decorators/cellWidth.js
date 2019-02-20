import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Table/table.css';

export default width => () => ({
  className: css(getModifier(styles, `width-${width}`))
});
