import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassMainFooterProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  /** Additional classes added to the main footer */
  className?: string;
  /** Main footer content */
  children?: React.ReactNode;
  /** Indicates if the main footer is expanded */
  isExpanded?: boolean;
}

export const CompassMainFooter: React.FunctionComponent<CompassMainFooterProps> = ({
  className,
  children,
  isExpanded = true,
  ...props
}) => (
  <div className={css(styles.compassMainFooter, isExpanded && 'pf-m-expanded', className)} {...props}>
    {children}
  </div>
);

CompassMainFooter.displayName = 'CompassMainFooter';
