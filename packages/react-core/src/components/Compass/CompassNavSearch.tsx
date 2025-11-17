import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

const CompassSearchIcon = () => (
  <svg
    width="1em"
    height="1em"
    className="pf-v6-svg"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M14.166 14.166L17.4993 17.4993"
      stroke="currentcolor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0108 15.8333 12.6801 15.0846 13.887 13.8744C15.0897 12.6685 15.8333 11.0044 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667Z"
      stroke="currentcolor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface CompassNavSearchProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick'> {
  /** Content to display in the tooltip. Defaults to "Search". */
  tooltipContent?: React.ReactNode;
  /** Click handler for the search button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CompassNavSearch: React.FunctionComponent<CompassNavSearchProps> = ({
  'aria-label': ariaLabel = 'Search',
  tooltipContent = 'Search',
  className,
  onClick,
  ...props
}: CompassNavSearchProps) => (
  <div className={css(styles.compassNav + '-search', className)} {...props}>
    <Tooltip content={tooltipContent}>
      <Button isCircle variant="plain" icon={<CompassSearchIcon />} aria-label={ariaLabel} onClick={onClick} />
    </Tooltip>
  </div>
);

CompassNavSearch.displayName = 'CompassNavSearch';
