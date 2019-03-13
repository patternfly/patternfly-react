import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Title } from '../Title';
import { TimesIcon } from '@patternfly/react-icons';

interface WizardHeaderProps {
  onClose?: () => any;
  title: string;
  description: string;
  ariaLabel: string;
}

const WizardHeader: React.SFC<WizardHeaderProps> = ({ onClose, title, description, ariaLabel }) => (
  <div className={css(styles.wizardHeader)}>
    <Button variant="plain" className={css(styles.wizardClose)} aria-label={ariaLabel} onClick={onClose}>
      <TimesIcon aria-hidden="true" />
    </Button>
    <Title size="3xl" className={css(styles.wizardTitle)}>{title}</Title>
    {description && <p className={css(styles.wizardDescription)}>
      {description}
    </p>}
  </div>
);

WizardHeader.defaultProps = {
  onClose: () => undefined
};

export default WizardHeader;