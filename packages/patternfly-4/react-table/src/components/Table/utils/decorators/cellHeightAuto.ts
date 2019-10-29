import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

export const cellHeightAuto: ITransform = () => {
  console.warn('cellHeightAuto:', 'is deprecated. Use heightAuto instead. Read more here: https://github.com/patternfly/patternfly-react/issues/3132')
  return {
    className: css(getModifier(styles, 'heightAuto'))
  }
};
