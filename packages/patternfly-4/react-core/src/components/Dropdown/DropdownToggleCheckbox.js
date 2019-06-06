import React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional classes added to the DropdownToggleCheckbox */
  className: PropTypes.string,
  /** Flag to show if the checkbox selection is valid or invalid */
  isValid: PropTypes.bool,
  /** Flag to show if the checkbox is disabled */
  isDisabled: PropTypes.bool,
  /** Flag to show if the checkbox is checked */
  isChecked: PropTypes.bool,
  /** Alternate Flag to show if the checkbox is checked */
  checked: PropTypes.bool,
  /** A callback for when the checkbox selection changes */
  onChange: PropTypes.func,
  /** Id of the checkbox */
  id: PropTypes.string.isRequired,
  /** Aria-label of the checkbox */
  'aria-label': PropTypes.any.isRequired,
  /** Additional props are spread to the <input> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  checked: null,
  onChange: () => undefined
};

class DropdownToggleCheckbox extends React.Component {
  handleChange = event => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  render() {
    const { className, onChange, isValid, isDisabled, isChecked, checked, ...props } = this.props;
    return (
      <label className={css(styles.dropdownToggleCheck, className)} htmlFor={props.id}>
        <input
          {...props}
          type="checkbox"
          onChange={this.handleChange}
          aria-invalid={!isValid}
          disabled={isDisabled}
          checked={isChecked || checked}
        />
      </label>
    );
  }
}

DropdownToggleCheckbox.propTypes = propTypes;
DropdownToggleCheckbox.defaultProps = defaultProps;

export default DropdownToggleCheckbox;
