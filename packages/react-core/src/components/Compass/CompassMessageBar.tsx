import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassMessageBarProps {
  /** Content for the message bar */
  children?: React.ReactNode;
}

export const CompassMessageBar: React.FunctionComponent<CompassMessageBarProps> = ({ children }) => (
  <div className={css(styles.compassMessageBar)}>{children}</div>
);

CompassMessageBar.displayName = 'CompassMessageBar';
