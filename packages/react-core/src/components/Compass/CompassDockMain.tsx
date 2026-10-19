import styles from '@rh-felt/react-styles/css/components/Compass/compass';
import { css } from '@rh-felt/react-styles';

export interface CompassDockMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the compass dock main container. */
  className?: string;
  /** Content of the compass dock main container. */
  children?: React.ReactNode;
}

export const CompassDockMain: React.FunctionComponent<CompassDockMainProps> = ({
  className,
  children,
  ...props
}: CompassDockMainProps) => (
  <div className={css(styles.compassDockMain, className)} {...props}>
    {children}
  </div>
);

CompassDockMain.displayName = 'CompassDockMain';
