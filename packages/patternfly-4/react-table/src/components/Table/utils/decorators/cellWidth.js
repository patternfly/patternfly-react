import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Table/table-grid.css';

export default (width) => () => ({
  className: css(getModifier(styles, `width-${width}`))
})
