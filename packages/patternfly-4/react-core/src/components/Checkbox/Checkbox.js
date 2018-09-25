import React from 'react';
import styles from '@patternfly/patternfly-next/components/Check/check.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** additional classes added to the Checkbox */
  className: PropTypes.string,
  /** Flag to show if the Checkbox selection is valid or invalid. */
  isValid: PropTypes.bool,
  /** Flag to show if the Checkbox is disabled. */
  isDisabled: PropTypes.bool,
  /** A callback for when the Checkbox selection changes. */
  onChange: PropTypes.func
};

const defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  onChange: () => undefined
};

class Checkbox extends React.Component {
  handleChange = event => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  render() {
    const { className, onChange, isValid, isDisabled, ...props } = this.props;
    return (
      <input
        {...props}
        className={css(styles.check, className)}
        type="checkbox"
        onChange={this.handleChange}
        aria-invalid={!isValid}
        disabled={isDisabled}
      />
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
