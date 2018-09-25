import React from 'react';
import styles from '@patternfly/patternfly-next/components/Check/check.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** additional classes added to the Radio */
  className: PropTypes.string,
  /** Flag to show if the Radio selection is valid or invalid. */
  isValid: PropTypes.bool,
  /** Flag to show if the Radio is disabled. */
  isDisabled: PropTypes.bool,
  /** A callback for when the Radio selection changes. */
  onChange: PropTypes.func
};

const defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  onChange: () => undefined
};

class Radio extends React.Component {
  handleChange = event => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  render() {
    const { className, onChange, isValid, isDisabled, ...props } = this.props;
    return (
      <input
        {...props}
        className={css(styles.check, className)}
        type="radio"
        onChange={onChange ? this.handleChange : null}
        aria-invalid={!isValid}
        disabled={isDisabled}
      />
    );
  }
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
