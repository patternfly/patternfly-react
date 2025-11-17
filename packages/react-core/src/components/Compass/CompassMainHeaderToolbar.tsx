import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

/** A wrapper component for custom toolbar content to be passed into a compass main header. This should also be wrapped
 * by a compass main header content component.
 */

export interface CompassMainHeaderToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the main header toolbar. */
  children: React.ReactNode;
  /** Additional classes added to the main header toolbar. */
  className?: string;
}

export const CompassMainHeaderToolbar: React.FunctionComponent<CompassMainHeaderToolbarProps> = ({
  children,
  className,
  ...props
}: CompassMainHeaderToolbarProps) => (
  <div className={css(`${styles.compass}__main-header-toolbar`, className)} {...props}>
    {children}
  </div>
);

CompassMainHeaderToolbar.displayName = 'CompassMainHeaderToolbar';
