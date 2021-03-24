import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import { Button } from '../Button';

export interface FormFieldGroupToggleProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the section */
  className?: string;
  /** Callback for onClick */
  onToggle: () => void;
  /** Flag indicating if the toggle is expanded */
  isExpanded: boolean;
  /** Aria label of the toggle button */
  'aria-label'?: string;
  /** Sets the aria-labelledby attribute on the toggle button element */
  'aria-labelledby'?: string;
}

export const FormFieldGroupToggle: React.FunctionComponent<FormFieldGroupToggleProps> = ({
  className,
  onToggle,
  isExpanded,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...props
}: FormFieldGroupToggleProps) => (
  <div className={css(styles.formFieldGroupToggle, className)} {...props}>
    <div className={css(styles.formFieldGroupToggleButton)}>
      <Button
        variant="plain"
        aria-label={ariaLabel}
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-labelledby={ariaLabelledby}
      >
        {isExpanded ? <AngleDownIcon aria-hidden="true" /> : <AngleRightIcon aria-hidden="false" />}
      </Button>
    </div>
  </div>
);
FormFieldGroupToggle.displayName = 'FormFieldGroupToggle';
