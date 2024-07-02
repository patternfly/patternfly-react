import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export interface WizardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Callback function called when the X (Close) button is clicked */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Title of the wizard */
  title: string;
  /** Description of the wizard */
  description?: React.ReactNode;
  /** Component type of the description */
  descriptionComponent?: 'div' | 'p';
  /** Flag indicating whether the close button should be in the header */
  isCloseHidden?: boolean;
  /** Aria-label applied to the X (Close) button */
  closeButtonAriaLabel?: string;
  /** id for the title */
  titleId?: string;
  /** id for the description */
  descriptionId?: string;
  /** Additional classes spread to the wizard header */
  className?: string;
}

export const WizardHeader: React.FunctionComponent<WizardHeaderProps> = ({
  onClose = () => undefined,
  title,
  description,
  isCloseHidden,
  closeButtonAriaLabel,
  titleId,
  descriptionComponent: Component = 'div',
  descriptionId,
  className,
  ...props
}: WizardHeaderProps) => (
  <div className={css(styles.wizardHeader, className)} {...props}>
    {!isCloseHidden && (
      <div className={css(styles.wizardClose)}>
        <Button
          variant="plain"
          aria-label={closeButtonAriaLabel}
          onClick={onClose}
          icon={<TimesIcon aria-hidden="true" />}
        />
      </div>
    )}
    <div className={css(styles.wizardTitle)}>
      <h2 className={css(styles.wizardTitleText)} id={titleId}>
        {title || <>&nbsp;</>}
      </h2>
    </div>

    {description && (
      <Component className={css(styles.wizardDescription)} id={descriptionId}>
        {description}
      </Component>
    )}
  </div>
);

WizardHeader.displayName = 'WizardHeader';
