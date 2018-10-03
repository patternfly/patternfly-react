import React from 'react';
import styles from '@patternfly/patternfly-next/components/FormControl/form-control.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional classes added to the TextArea. */
  className: PropTypes.string,
  /** Flag to show if the TextArea is required. */
  isRequired: PropTypes.bool,
  /** Flag to show if the TextArea is valid or invalid. */
  isValid: PropTypes.bool,
  /** Value of the TextArea. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** A callback for when the TextArea value changes. */
  onChange: PropTypes.func,
  /** Custom flag to show that the TextArea requires an associated id or aria-label. */
  'aria-label': props => {
    if (!props.id && !props['aria-label']) {
      return new Error('TextArea requires either an id or aria-label to be specified');
    }
    return null;
  }
};

const defaultProps = {
  className: '',
  isRequired: false,
  isValid: true,
  value: null,
  onChange: () => undefined,
  'aria-label': null
};

class TextArea extends React.Component {
  handleChange = event => {
    this.props.onChange(event.currentTarget.value, event);
  };

  render() {
    const { className, value, onChange, isValid, isRequired, ...props } = this.props;
    return (
      <textarea
        {...props}
        className={css(styles.formControl, className)}
        onChange={this.handleChange}
        value={value}
        aria-invalid={!isValid}
        required={isRequired}
      />
    );
  }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
