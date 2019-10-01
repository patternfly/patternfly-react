import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { ASTERISK } from '../../helpers/htmlConstants';
import { FormContext } from './FormContext';
import { css, getModifier } from '@patternfly/react-styles';

export interface FormGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** Anything that can be rendered as FormGroup content. */
  children?: React.ReactNode;
  /** Additional classes added to the FormGroup. */
  className?: string;
  /** Label text before the field. */
  label?: React.ReactNode;
  /** Sets the FormGroup required. */
  isRequired?: boolean;
  /** Sets the FormGroup isValid. */
  isValid?: boolean;
  /** Sets the FormGroup isInline. */
  isInline?: boolean;
  /** Helper text after the field. It can be a simple text or an object. */
  helperText?: React.ReactNode;
  /** Helper text after the field when the field is isValid. It can be a simple text or an object. */
  helperTextInvalid?: React.ReactNode;
  /** ID of the included field. It has to be the same for proper working. */
  fieldId: string;
}

export const FormGroup: React.FunctionComponent<FormGroupProps> = ({
  children = null,
  className = '',
  label,
  isRequired = false,
  isValid = true,
  isInline = false,
  helperText,
  helperTextInvalid,
  fieldId,
  ...props
}: FormGroupProps) => (
  <FormContext.Consumer>
    {({ isHorizontal }: { isHorizontal: boolean }) => (
      <div
        {...props}
        className={css(styles.formGroup, isInline ? getModifier(styles, 'inline', className) : className)}
      >
        {label && (
          <label className={css(styles.formLabel)} htmlFor={fieldId}>
            <span className={css(styles.formLabelText)}>{label}</span>
            {isRequired && (
              <span className={css(styles.formLabelRequired)} aria-hidden="true">
                {ASTERISK}
              </span>
            )}
          </label>
        )}
        {isHorizontal ? <div className={css(styles.formHorizontalGroup)}>{children}</div> : children}
        {((isValid && helperText) || (!isValid && helperTextInvalid)) && (
          <div
            className={css(styles.formHelperText, !isValid ? getModifier(styles, 'error') : '')}
            id={`${fieldId}-helper`}
            aria-live="polite"
          >
            {isValid ? helperText : helperTextInvalid}
          </div>
        )}
      </div>
    )}
  </FormContext.Consumer>
);
