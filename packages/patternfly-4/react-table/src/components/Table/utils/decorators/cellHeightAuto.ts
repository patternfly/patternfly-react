import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const cellHeightAuto = () => {
  console.warn('cellHeightAuto:', 'is deprecated. Use heightAuto instead. Read more here: https://github.com/patternfly/patternfly-react/issues/3132')
  return {
    className: css(getModifier(styles, 'heightAuto'))
  }
};