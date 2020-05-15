import styles from '@patternfly/react-styles/css/components/Table/table';
import { ITransform } from '../../Table';

export const breakWord: ITransform = () => ({
  className: styles.modifiers.breakWord
});

export const fitContent: ITransform = () => ({
  className: styles.modifiers.fitContent
});

export const nowrap: ITransform = () => ({
  className: styles.modifiers.nowrap
});

export const truncate: ITransform = () => ({
  className: styles.modifiers.truncate
});

export const wrappable: ITransform = () => ({
  className: styles.modifiers.wrap
});
