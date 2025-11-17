import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';
export interface CompassNavContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the nav content wrapper. */
  children: React.ReactNode;
}

export const CompassNavContent: React.FunctionComponent<CompassNavContentProps> = ({
  children,
  className,
  ...props
}: CompassNavContentProps ) => (
  <div className={css(styles.compassNavContent, className)} {...props}>
    {children}
  </div>
);

CompassNavContent.displayName = 'CompassNavContent';
