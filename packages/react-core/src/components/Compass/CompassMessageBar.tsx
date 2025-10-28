import { css } from '@patternfly/react-styles';

interface CompassMessageBarProps {
  /** Content for the message bar */
  children?: React.ReactNode;
}

export const CompassMessageBar: React.FunctionComponent<CompassMessageBarProps> = ({ children }) => (
  <div className={css('pf-v6-c-compass__message-bar')}>{children}</div>
);

CompassMessageBar.displayName = 'CompassMessageBar';
