import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassNavContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the nav content wrapper. */
  children: React.ReactNode;
  /** Additional classes added to the nav content. */
  className?: string;
}

export const CompassNavContent: React.FunctionComponent<CompassNavContentProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={css(styles.compassNavContent, className)} {...props}>
    {children}
  </div>
);

CompassNavContent.displayName = 'CompassNavContent';
