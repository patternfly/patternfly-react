import React from 'react';
import styles from '@patternfly/patternfly-next/components/Check/check.css';
import PropTypes from 'prop-types';
import { css, getModifier } from '@patternfly/react-styles';

const propTypes = {
  /** Additional classes added to the Checkbox. */
  className: PropTypes.string,
  /** Flag to show if the Checkbox selection is valid or invalid. */
  isValid: PropTypes.bool,
  /** Flag to show if the Checkbox is disabled. */
  isDisabled: PropTypes.bool,
  /** Flag to show if the Checkbox is checked. */
  isChecked: PropTypes.bool,
  /** A callback for when the Checkbox selection changes. */
  onChange: PropTypes.func,
  /** Label text of the checkbox. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Id of the checkbox. */
  id: PropTypes.string.isRequired,
  /** Aria-label of the checkbox. */
  'aria-label': PropTypes.any.isRequired
};

const defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  onChange: () => undefined,
  label: undefined
};

class Checkbox extends React.Component {
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
          type="checkbox"
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

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
