import React from 'react';
import styles from '@patternfly/patternfly-next/components/Check/check.css';
import PropTypes from 'prop-types';
import { css, getModifier } from '@patternfly/react-styles';

const propTypes = {
  /** Additional classes added to the Radio. */
  className: PropTypes.string,
  /** Flag to show if the Radio selection is valid or invalid. */
  isValid: PropTypes.bool,
  /** Flag to show if the Radio is disabled. */
  isDisabled: PropTypes.bool,
  /** Flag to show if the Radio is checked. */
  isChecked: PropTypes.bool,
  /** A callback for when the Radio selection changes. */
  onChange: PropTypes.func,
  /** Label text of the Radio. */
  label: PropTypes.node,
  /** Id of the Radio. */
  id: PropTypes.string.isRequired,
  /** Aria-label of the Radio. */
  'aria-label': PropTypes.any.isRequired,
  /** Name for group of Radios */
  name: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  onChange: () => undefined,
  label: undefined
};

class Radio extends React.Component {
  handleChange = event => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  render() {
    const { className, onChange, isValid, isDisabled, isChecked, label, checked, ...props } = this.props;
    return (
      <div className={css(styles.check, className)}>
        <input
          {...props}
          className={css(styles.checkInput)}
          type="radio"
          onChange={this.handleChange}
          aria-invalid={!isValid}
          disabled={isDisabled}
          checked={isChecked || checked}
        />
        {label && (
          <label className={css(styles.checkLabel, getModifier(styles, isDisabled && 'disabled'))} htmlFor={props.id}>
            {label}
          </label>
        )}
      </div>
    );
  }
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
