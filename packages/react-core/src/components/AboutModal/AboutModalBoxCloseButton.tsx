import { type FunctionComponent, type HTMLProps, type MouseEvent as ReactMouseEvent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export interface AboutModalBoxCloseButtonProps extends HTMLProps<HTMLDivElement> {
  /** A callback for when the close button is clicked  */
  onClose?: (event: ReactMouseEvent | MouseEvent | KeyboardEvent) => void;
  /** Set close button aria label */
  'aria-label'?: string;
}

export const AboutModalBoxCloseButton: FunctionComponent<AboutModalBoxCloseButtonProps> = ({
  onClose = (_e) => undefined as any,
  'aria-label': ariaLabel = 'Close Dialog',
  ...props
}: AboutModalBoxCloseButtonProps) => (
  <div className={css(styles.aboutModalBoxClose)} {...props}>
    <Button variant="plain" onClick={onClose} aria-label={ariaLabel}>
      <TimesIcon />
    </Button>
  </div>
);
AboutModalBoxCloseButton.displayName = 'AboutModalBoxCloseButton';
