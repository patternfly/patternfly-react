import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const cellHeightAuto = () => ({
  className: css(getModifier(styles, 'heightAuto'))
});
