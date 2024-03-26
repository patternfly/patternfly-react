import React from 'react';
import { Button, ButtonProps } from '../Button';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';

/** A help button to be passed to the FormGroup's labelHelp property. This should be wrapped or linked
 * to our Popover component.
 */
export interface FormGroupLabelHelpProps extends ButtonProps {
  /** Adds an accessible name for the help button. */
  'aria-label': string;
  /** Additional classes added to the help button. */
  className?: string;
}

export const FormGroupLabelHelp: React.FunctionComponent<FormGroupLabelHelpProps> = ({
  'aria-label': ariaLabel,
  className,
  ...props
}) => (
  <Button aria-label={ariaLabel} className={className} variant="plain" hasNoPadding {...props}>
    <QuestionCircleIcon />
  </Button>
);
FormGroupLabelHelp.displayName = 'FormGroupLabelHelp';
