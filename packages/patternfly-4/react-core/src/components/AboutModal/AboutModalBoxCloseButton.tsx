import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import { Button, ButtonVariant } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

export interface AboutModalBoxCloseButtonProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the About Modal Close button */
  className?: string;
  /** A callback for when the close button is clicked */
  onClose?(event: React.MouseEvent<HTMLButtonElement>): void;
};

const AboutModalBoxCloseButton: React.FunctionComponent<AboutModalBoxCloseButtonProps> = ({
  className = '',
  onClose = () => undefined,
  ...props
}: AboutModalBoxCloseButtonProps) => (
    /** Additional props are spread to the container <div> */
    <div {...props} className={css(styles.aboutModalBoxClose, className)}>
      <Button variant={ButtonVariant.plain} onClick={onClose} aria-label="Close Dialog">
        <TimesIcon />
      </Button>
    </div>
  );

export default AboutModalBoxCloseButton;
