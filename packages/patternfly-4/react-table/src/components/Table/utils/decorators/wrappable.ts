import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

export const wrappable: ITransform = () => ({
  className: styles.modifiers.wrap
});
