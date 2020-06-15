import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Title } from '../Title';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';

export interface WizardHeaderProps {
  /** Callback function called when the X (Close) button is clicked */
  onClose?: () => void;
  /** Title of the wizard */
  title: string;
  /** Description of the wizard */
  description?: React.ReactNode;
  /** Flag indicating whether the close button should be in the header */
  hideClose?: boolean;
  /** Aria-label applied to the X (Close) button */
  closeButtonAriaLabel?: string;
  /** id for the title */
  titleId?: string;
  /** id for the description */
  descriptionId?: string;
}

export const WizardHeader: React.FunctionComponent<WizardHeaderProps> = ({
  onClose = () => undefined,
  title,
  description,
  hideClose,
  closeButtonAriaLabel,
  titleId,
  descriptionId
}: WizardHeaderProps) => (
  <div className={css(styles.wizardHeader)}>
    {!hideClose && (
      <Button variant="plain" className={css(styles.wizardClose)} aria-label={closeButtonAriaLabel} onClick={onClose}>
        <TimesIcon aria-hidden="true" />
      </Button>
    )}
    <Title headingLevel="h2" size="3xl" className={css(styles.wizardTitle)} aria-label={title} id={titleId}>
      {title || <>&nbsp;</>}
    </Title>
    {description && (
      <p className={css(styles.wizardDescription)} id={descriptionId}>
        {description}
      </p>
    )}
  </div>
);
WizardHeader.displayName = 'WizardHeader';
