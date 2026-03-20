import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { Button } from '../Button';
import RhMicronsCloseIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-close-icon';

export const PopoverCloseButton: React.FunctionComponent<PopoverCloseButtonProps> = ({
  onClose = () => undefined as void,
  ...props
}: PopoverCloseButtonProps) => (
  <div className={css(styles.popoverClose)}>
    <Button
      onClick={onClose}
      variant="plain"
      aria-label
      {...props}
      style={{ pointerEvents: 'auto' }}
      icon={<RhMicronsCloseIcon />}
    />
  </div>
);

PopoverCloseButton.displayName = 'PopoverCloseButton';

export interface PopoverCloseButtonProps {
  /** PopoverCloseButton onClose function */
  onClose?: (event: any) => void;
  /** Aria label for the Close button */
  'aria-label': string;
}
