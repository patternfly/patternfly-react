import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

/** A wrapper component to be passed as custom content for the compass main header. This should also be wrapped
 * in a compass panel component.
 */

export interface CompassMainHeaderContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the main header content. */
  children: React.ReactNode;
  /** Additional classes added to the main header content. */
  className?: string;
}

export const CompassMainHeaderContent: React.FunctionComponent<CompassMainHeaderContentProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={css(styles.compassMainHeaderContent, className)} {...props}>
    {children}
  </div>
);

CompassMainHeaderContent.displayName = 'CompassMainHeaderContent';
