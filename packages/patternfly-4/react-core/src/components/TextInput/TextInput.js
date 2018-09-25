import React from 'react';
import styles from '@patternfly/patternfly-next/components/FormControl/form-control.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const inputTypes = [
  'text',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'time',
  'url'
];

const propTypes = {
  /** Additional classes added to the TextInput. */
  className: PropTypes.string,
  /** Flag to show if the input is required. */
  isRequired: PropTypes.bool,
  /** Type that the input accepts. */
  type: PropTypes.oneOf(inputTypes),
  /** Value of the input. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Flag to show if the input is valid or invalid. */
  isValid: PropTypes.bool,
  /** Flag to show if the input is disabled. */
  isDisabled: PropTypes.bool,
  /** Flag to show if the input has the additional alternative class. */
  isAlt: PropTypes.bool,
  /** A callback for when the input value changes. */
  onChange: PropTypes.func,
  /** Flag to show if the input is read only. */
  isReadOnly: PropTypes.bool,
  /** Custom flag to show that the input requires an associated id or aria-label. */
  'aria-label': props => {
    if (!props.id && !props['aria-label']) {
      return new Error('TextInput requires either an id or aria-label to be specified');
    }
    return null;
  }
};

const defaultProps = {
  className: '',
  isRequired: false,
  isAlt: false,
  isValid: true,
  isDisabled: false,
  isReadOnly: false,
  type: 'text',
  value: null,
  onChange: () => undefined,
  'aria-label': null
};

class TextInput extends React.Component {
  handleChange = event => {
    this.props.onChange(event.currentTarget.value, event);
  };

  render() {
    const {
      className,
      type,
      value,
      onChange,
      isValid,
      isReadOnly,
      isAlt,
      isRequired,
      isDisabled,
      ...props
    } = this.props;
    return (
      <input
        {...props}
        className={css(styles.formControl, className, isAlt && styles.modifiers.formControlAlt)}
        onChange={this.handleChange}
        type={type}
        value={value}
        aria-invalid={!isValid}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
      />
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
