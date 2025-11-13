import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

/** A wrapper component for custom title content to be passed into a compass main header. This should also be wrapped
 * by a compass main header content component.
 */

export interface CompassMainHeaderTitleProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the main header title. */
  children: React.ReactNode;
  /** Additional classes added to the main header title. */
  className?: string;
}

export const CompassMainHeaderTitle: React.FunctionComponent<CompassMainHeaderTitleProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={css(`${styles.compass}__main-header-title`, className)} {...props}>
    {children}
  </div>
);

CompassMainHeaderTitle.displayName = 'CompassMainHeaderTitle';
