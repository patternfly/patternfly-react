import React from 'react';
import styles from '@patternfly/patternfly-next/components/FormControls/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** additional classes added to the Select control */
  className: PropTypes.string,
  /** value of selected option */
  value: PropTypes.any,
  /** Array of options OR array of option Groups available to select from.  If getGroupLabel, it should be an array ofoption groups */
  options: PropTypes.array,
  /** flag indicating the options are grouped */
  isGrouped: PropTypes.bool,
  /** function to retrieve the label for an option group */
  getGroupLabel: PropTypes.func,
  /** function to retrieve the array of options for an option group */
  getGroupOptions: PropTypes.func,
  /** function to retrieve the label for an option */
  getLabel: PropTypes.func,
  /** function to retrieve the Value for an option */
  getValue: PropTypes.func,
  /** function to retrieve flag indicating if the option is disabled */
  getOptionDisabled: PropTypes.func,
  /** Flag indicating selection is valid */
  isValid: PropTypes.bool,
  /** Flag indicating the Select is disabled */
  isDisabled: PropTypes.bool,
  /** Optional callback for updating when selection loses focus */
  onBlur: PropTypes.func,
  /** Optional callback for updating when selection gets focus */
  onFocus: PropTypes.func,
  /** Optional callback for updating when selection changes */
  onChange: PropTypes.func,
  /** Custom flag to show that the Select requires an associated id or aria-label. */
  'aria-label': props => {
    if (!props.id && !props['aria-label']) {
      return new Error('Select requires either an id or aria-label to be specified');
    }
    return null;
  }
};

const defaultProps = {
  className: '',
  value: '',
  options: null,
  isGrouped: false,
  getGroupLabel: () => undefined,
  getGroupOptions: () => undefined,
  getLabel: () => undefined,
  getValue: () => undefined,
  getOptionDisabled: () => undefined,
  isValid: true,
  isDisabled: false,
  onBlur: () => undefined,
  onFocus: () => undefined,
  onChange: () => undefined,
  'aria-label': null
};

class Select extends React.Component {
  handleChange = event => {
    this.props.onChange(event.currentTarget.value, event);
  };

  getOptions = options => {
    const { getOptionDisabled, getValue, getLabel } = this.props;
    return options
      ? options.map(
          (option, index) =>
            getOptionDisabled(option) ? (
              <option disabled key={index} value={getValue(option)}>
                {getLabel(option)}
              </option>
            ) : (
              <option key={index} value={getValue(option)}>
                {getLabel(option)}
              </option>
            )
        )
      : '';
  };

  render() {
    const {
      className,
      options,
      value,
      isGrouped,
      getGroupLabel,
      getGroupOptions,
      getOptionDisabled,
      getValue,
      getLabel,
      isValid,
      isDisabled,
      ...props
    } = this.props;
    return (
      <select
        {...props}
        className={css(styles.formControl, className, !isValid && styles.modifiers.invalid)}
        aria-invalid={!isValid}
        onChange={this.handleChange}
        disabled={isDisabled}
        value={value}
      >
        {options &&
          (isGrouped
            ? options.map((group, index) => (
                <optgroup key={index} label={getGroupLabel(group)}>
                  {this.getOptions(getGroupOptions(group))}
                </optgroup>
              ))
            : this.getOptions(options))}
      </select>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
