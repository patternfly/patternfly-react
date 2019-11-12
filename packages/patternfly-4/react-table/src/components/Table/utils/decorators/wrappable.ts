import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

export const wrappable: ITransform = () => ({
  className: css(getModifier(styles, 'wrap'))
});
