import React from 'react';
import { Button, ButtonProps } from '../Button';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import { KeyTypes } from '../../helpers/constants';

/** A help button to be passed to the FormGroup's labelHelp property. This should be wrapped or linked
 * to our Popover component.
 */
export interface FormGroupLabelHelpProps extends ButtonProps {
  /** Adds an accessible name for the help button. */
  'aria-label': string;
  /** Additional classes added to the help button. */
  className?: string;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLSpanElement>;
}

const FormGroupLabelHelpBase: React.FunctionComponent<FormGroupLabelHelpProps> = ({
  'aria-label': ariaLabel,
  className,
  innerRef,
  ...props
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const buttonRef = innerRef || ref;

  const isMutableRef = (ref: React.Ref<HTMLSpanElement>): ref is React.MutableRefObject<HTMLSpanElement> =>
    typeof ref === 'object' && ref !== null && 'current' in ref && ref.current !== undefined;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if ([KeyTypes.Space, KeyTypes.Enter].includes(event.key) && isMutableRef(buttonRef) && buttonRef.current) {
      event.preventDefault();
      buttonRef.current.click();
    }
  };

  return (
    <Button
      component="span"
      isInline
      ref={buttonRef}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      className={className}
      variant="plain"
      hasNoPadding
      {...props}
      icon={<QuestionCircleIcon />}
    />
  );
};

export const FormGroupLabelHelp = React.forwardRef((props: FormGroupLabelHelpProps, ref: React.Ref<any>) => (
  <FormGroupLabelHelpBase innerRef={ref} {...props} />
));

FormGroupLabelHelp.displayName = 'FormGroupLabelHelp';
