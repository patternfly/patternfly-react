import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassMainFooterProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  /** Additional classes added to the main footer */
  className?: string;
  /** Main footer content */
  children?: React.ReactNode;
}

export const CompassMainFooter: React.FunctionComponent<CompassMainFooterProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={css(`${styles.compass}__main-footer`, className)} {...props}>
    {children}
  </div>
);

CompassMainFooter.displayName = 'CompassMainFooter';
