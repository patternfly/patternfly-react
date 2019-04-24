import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Title } from '../Title';
import { TimesIcon } from '@patternfly/react-icons';

interface WizardHeaderProps {
  onClose?: () => void;
  title: string;
  description: string;
  ariaLabel: string;
  titleId: string;
  descriptionId: string;
}

export const WizardHeader: React.FunctionComponent<WizardHeaderProps> = ({
  onClose = () => undefined,
  title,
  description,
  ariaLabel,
  titleId,
  descriptionId
}: WizardHeaderProps) => (
    <div className={css(styles.wizardHeader)}>
      <Button variant="plain" className={css(styles.wizardClose)} aria-label={ariaLabel} onClick={onClose}>
        <TimesIcon aria-hidden="true" />
      </Button>
      <Title size="3xl" className={css(styles.wizardTitle)} aria-label={title} id={titleId}>{title}</Title>
      {description && <p className={css(styles.wizardDescription)} id={descriptionId}>
        {description}
      </p>}
    </div>
  );
