import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { ASTERISK } from '../../helpers/htmlConstants';
import { css } from '@patternfly/react-styles';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';

export interface FormGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** Anything that can be rendered as FormGroup content. */
  children?: React.ReactNode;
  /** Additional classes added to the FormGroup. */
  className?: string;
  /** Label text before the field. */
  label?: React.ReactNode;
  /** Additional label information displayed after the label. */
  labelInfo?: React.ReactNode;
  /** A help button for the label. We recommend using FormGroupLabelHelp element as a help icon button. The help button should be wrapped or linked to our popover component. */
  labelHelp?: React.ReactElement;
  /** Sets the FormGroup required. */
  isRequired?: boolean;
  /** Sets the FormGroup isInline. */
  isInline?: boolean;
  /** Sets the FormGroupControl to be stacked */
  isStack?: boolean;
  /** Removes top spacer from label. */
  hasNoPaddingTop?: boolean;
  /** ID of an individual field or a group of multiple fields. Required when a role of "group" or "radiogroup" is passed in.
   * If only one field is included, its ID attribute and this prop must be the same.
   */
  fieldId?: string;
  /** Sets the role of the form group. Pass in "radiogroup" when the form group contains multiple
   * radio inputs, or pass in "group" when the form group contains multiple of any other input type.
   */
  role?: string;
}

export const FormGroup: React.FunctionComponent<FormGroupProps> = ({
  children = null,
  className = '',
  label,
  labelInfo,
  labelHelp,
  isRequired = false,
  isInline = false,
  hasNoPaddingTop = false,
  isStack = false,
  fieldId,
  role,
  ...props
}: FormGroupProps) => {
  const isGroupOrRadioGroup = role === 'group' || role === 'radiogroup';
  const LabelComponent = isGroupOrRadioGroup ? 'span' : 'label';

  const labelContent = (
    <>
      <LabelComponent className={css(styles.formLabel)} {...(!isGroupOrRadioGroup && { htmlFor: fieldId })}>
        <span className={css(styles.formLabelText)}>{label}</span>
        {isRequired && (
          <span className={css(styles.formLabelRequired)} aria-hidden="true">
            {' '}
            {ASTERISK}
          </span>
        )}
      </LabelComponent>
      <>&nbsp;&nbsp;</>
      {React.isValidElement(labelHelp) && <span className={styles.formGroupLabelHelp}>{labelHelp}</span>}
    </>
  );

  return (
    <GenerateId>
      {(randomId) => (
        <div
          className={css(styles.formGroup, className)}
          {...(role && { role })}
          {...(isGroupOrRadioGroup && { 'aria-labelledby': `${fieldId || randomId}-legend` })}
          {...props}
        >
          {label && (
            <div
              className={css(
                styles.formGroupLabel,
                labelInfo && styles.modifiers.info,
                hasNoPaddingTop && styles.modifiers.noPaddingTop
              )}
              {...(isGroupOrRadioGroup && { id: `${fieldId || randomId}-legend` })}
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
            className={css(
              styles.formGroupControl,
              isInline && styles.modifiers.inline,
              isStack && styles.modifiers.stack
            )}
          >
            {children}
          </div>
        </div>
      )}
    </GenerateId>
  );
};
FormGroup.displayName = 'FormGroup';
