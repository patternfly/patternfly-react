import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Form/form.css';
import { ASTERISK } from '../../internal/htmlConstants';
import { FormContext } from '../Form/FormContext';
import { css, getModifier } from '@patternfly/react-styles';

const childrenArrayContains = (childrenArray, attribute, errorMessage) => {
  let throwError = true;
  childrenArray.forEach(child => {
    if (child.props[attribute]) {
      throwError = false;
    }
  });
  if (throwError) {
    return new Error(errorMessage);
  }
  return null;
};

const propTypes = {
  /** Anything that can be rendered as FormGroup content. */
  children: props => {
    if (!props.label) {
      if (Array.isArray(props.children)) {
        return childrenArrayContains(
          props.children,
          'aria-label',
          `When label is not defined, at least one of Form Group children should have an aria-label attribute.`
        );
      } else if (!props.children.props['aria-label']) {
        return new Error(`When label is not defined, a Form Group child should have an aria-label attribute.`);
      }
    }
    if (Array.isArray(props.children)) {
      return childrenArrayContains(props.children, 'id', `At least one of Form Group children should have an id.`);
    } else if (!props.children.props.id) {
      return new Error(`A child element of Form Group has to have an id.`);
    }
    return null;
  },
  /** Additional classes added to the FormGroup. */
  className: PropTypes.string,
  /** Label text before the field. */
  label: PropTypes.node,
  /** Sets the FormGroup required. */
  isRequired: PropTypes.bool,
  /** Sets the FormGroup isValid. */
  isValid: PropTypes.bool,
  /** Sets the FormGroup isInline. */
  isInline: PropTypes.bool,
  /** Helper text after the field. It can be a simple text or an object. */
  helperText: PropTypes.node,
  /** Helper text after the field when the field is isValid. It can be a simple text or an object. */
  helperTextInvalid: PropTypes.node,
  /** ID of the included field. It has to be the same for proper working. */
  fieldId: PropTypes.string.isRequired
};

const defaultProps = {
  children: null,
  className: '',
  label: undefined,
  isRequired: false,
  isValid: true,
  isInline: false,
  helperText: undefined,
  helperTextInvalid: undefined
};

const FormGroup = ({
  className,
  children,
  label,
  isRequired,
  isValid,
  isInline,
  helperText,
  helperTextInvalid,
  fieldId,
  ...props
}) => (
    <FormContext.Consumer>
      {({ isHorizontal }) => (
        <div {...props} className={css(styles.formGroup, getModifier(styles, isInline && 'inline'), className)}>
          {label && (
            <label className={css(styles.formLabel)} htmlFor={fieldId}>
              {label}
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
              className={css(styles.formHelperText, getModifier(styles, !isValid && 'error', styles.modifiers.info))}
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

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
