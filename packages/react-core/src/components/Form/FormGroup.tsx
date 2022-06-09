import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { ASTERISK } from '../../helpers/htmlConstants';
import { css } from '@patternfly/react-styles';
import { ValidatedOptions } from '../../helpers/constants';

export interface FormGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** Anything that can be rendered as FormGroup content. */
  children?: React.ReactNode;
  /** Additional classes added to the FormGroup. */
  className?: string;
  /** Label text before the field. */
  label?: React.ReactNode;
  /** Additional label information displayed after the label. */
  labelInfo?: React.ReactNode;
  /** Sets an icon for the label. For providing additional context. Host element for Popover  */
  labelIcon?: React.ReactElement;
  /** Sets the FormGroup required. */
  isRequired?: boolean;
  /**
   * Sets the FormGroup validated. If you set to success, text color of helper text will be modified to indicate valid state.
   * If set to error, text color of helper text will be modified to indicate error state.
   * If set to warning, text color of helper text will be modified to indicate warning state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';
  /** Sets the FormGroup isInline. */
  isInline?: boolean;
  /** Sets the FormGroupControl to be stacked */
  isStack?: boolean;
  /** Removes top spacer from label. */
  hasNoPaddingTop?: boolean;
  /** Helper text regarding the field. It can be a simple text or an object. */
  helperText?: React.ReactNode;
  /** Flag to position the helper text before the field. False by default */
  isHelperTextBeforeField?: boolean;
  /** Helper text after the field when the field is invalid. It can be a simple text or an object. */
  helperTextInvalid?: React.ReactNode;
  /** Icon displayed to the left of the helper text. */
  helperTextIcon?: React.ReactNode;
  /** Icon displayed to the left of the helper text when the field is invalid. */
  helperTextInvalidIcon?: React.ReactNode;
  /** ID of the included field. It has to be the same for proper working. */
  fieldId: string;
  /** Sets the role of the form group if multiple inputs are being passed in. If multiple radio inputs
   * are passed in use "radiogroup", otherwise use "group" when passing in multiple of any other input.
   */
  role?: 'group' | 'radiogroup';
}

export const FormGroup: React.FunctionComponent<FormGroupProps> = ({
  children = null,
  className = '',
  label,
  labelInfo,
  labelIcon,
  isRequired = false,
  validated = 'default',
  isInline = false,
  hasNoPaddingTop = false,
  isStack = false,
  helperText,
  isHelperTextBeforeField = false,
  helperTextInvalid,
  helperTextIcon,
  helperTextInvalidIcon,
  fieldId,
  role,
  ...props
}: FormGroupProps) => {
  const validHelperText =
    typeof helperText !== 'string' ? (
      helperText
    ) : (
      <div
        className={css(
          styles.formHelperText,
          validated === ValidatedOptions.success && styles.modifiers.success,
          validated === ValidatedOptions.warning && styles.modifiers.warning
        )}
        id={`${fieldId}-helper`}
        aria-live="polite"
      >
        {helperTextIcon && <span className={css(styles.formHelperTextIcon)}>{helperTextIcon}</span>}
        {helperText}
      </div>
    );

  const inValidHelperText =
    typeof helperTextInvalid !== 'string' ? (
      helperTextInvalid
    ) : (
      <div className={css(styles.formHelperText, styles.modifiers.error)} id={`${fieldId}-helper`} aria-live="polite">
        {helperTextInvalidIcon && <span className={css(styles.formHelperTextIcon)}>{helperTextInvalidIcon}</span>}
        {helperTextInvalid}
      </div>
    );

  const showValidHelperTxt = (validationType: 'success' | 'warning' | 'error' | 'default') =>
    validationType !== ValidatedOptions.error && helperText ? validHelperText : '';

  const helperTextToDisplay =
    validated === ValidatedOptions.error && helperTextInvalid ? inValidHelperText : showValidHelperTxt(validated);

  const LabelComponent = role ? 'span' : 'label';

  const labelContent = (
    <React.Fragment>
      <LabelComponent className={css(styles.formLabel)} {...(!role && { htmlFor: fieldId })}>
        <span className={css(styles.formLabelText)}>{label}</span>
        {isRequired && (
          <span className={css(styles.formLabelRequired)} aria-hidden="true">
            {' '}
            {ASTERISK}
          </span>
        )}
      </LabelComponent>{' '}
      {React.isValidElement(labelIcon) && labelIcon}
    </React.Fragment>
  );

  return (
    <div
      {...props}
      className={css(styles.formGroup, className)}
      {...(role && { 'aria-labelledby': `${fieldId}-legend`, role })}
    >
      {label && (
        <div
          className={css(
            styles.formGroupLabel,
            labelInfo && styles.modifiers.info,
            hasNoPaddingTop && styles.modifiers.noPaddingTop
          )}
          {...(role && { id: `${fieldId}-legend` })}
        >
          {labelInfo && (
            <React.Fragment>
              <div className={css(styles.formGroupLabelMain)}>{labelContent}</div>
              <div className={css(styles.formGroupLabelInfo)}>{labelInfo}</div>
            </React.Fragment>
          )}
          {!labelInfo && labelContent}
        </div>
      )}
      <div
        className={css(styles.formGroupControl, isInline && styles.modifiers.inline, isStack && styles.modifiers.stack)}
      >
        {isHelperTextBeforeField && helperTextToDisplay}
        {children}
        {!isHelperTextBeforeField && helperTextToDisplay}
      </div>
    </div>
  );
};
FormGroup.displayName = 'FormGroup';
