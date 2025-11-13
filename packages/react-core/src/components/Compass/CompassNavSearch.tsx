import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassNavSearchProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the nav search section (typically a search button/icon). */
  children: React.ReactNode;
  /** Additional classes added to the nav search section. */
  className?: string;
}

export const CompassNavSearch: React.FunctionComponent<CompassNavSearchProps> = ({ children, className, ...props }) => (
  <div className={css(styles.compassNavSearch, className)} {...props}>
    {children}
  </div>
);

CompassNavSearch.displayName = 'CompassNavSearch';
