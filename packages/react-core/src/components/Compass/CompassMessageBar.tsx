import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassMessageBarProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the message bar. Typically a @patternfly/chatbot MessageBar component. */
  children?: React.ReactNode;
  /** Additional classes added to the message bar */
  className?: string;
}

export const CompassMessageBar: React.FunctionComponent<CompassMessageBarProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={css(styles.compassMessageBar, className)} {...props}>
    {children}
  </div>
);

CompassMessageBar.displayName = 'CompassMessageBar';
