import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Table/table.css';

export default (width) => {
  console.log(getModifier(styles, `width-${width}`));
  return () => ({
    className: css(getModifier(styles, `width-${width}`))
  })
}
