import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import HomeIcon from '@patternfly/react-icons/dist/esm/icons/home-icon';

export interface CompassNavHomeProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick'> {
  /** Content to display in the tooltip. Defaults to "Home". */
  tooltipContent?: React.ReactNode;
  /** Click handler for the home button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CompassNavHome: React.FunctionComponent<CompassNavHomeProps> = ({
  'aria-label': ariaLabel = 'Home',
  tooltipContent = 'Home',
  className,
  onClick,
  ...props
}) => (
  <div className={css(styles.compassNav + '-home', className)} {...props}>
    <Tooltip content={tooltipContent}>
      <Button isCircle variant="plain" icon={<HomeIcon />} aria-label={ariaLabel} onClick={onClick} />
    </Tooltip>
  </div>
);

CompassNavHome.displayName = 'CompassNavHome';
