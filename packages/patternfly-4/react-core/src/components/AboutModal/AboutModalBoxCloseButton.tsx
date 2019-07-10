import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
import { Button } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

export interface AboutModalBoxCloseButtonProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the About Modal Close button  */
  className?: string;
  /** A callback for when the close button is clicked  */
  onClose?: () => void;
};

export const AboutModalBoxCloseButton: React.SFC<AboutModalBoxCloseButtonProps> = ({
  className = '',
  onClose = () => undefined as any,
  ...props
}: AboutModalBoxCloseButtonProps) => (
    <div className={css(styles.aboutModalBoxClose, className)} {...props}>
      <Button variant="plain" onClick={onClose} aria-label="Close Dialog">
        <TimesIcon />
      </Button>
    </div>
);
