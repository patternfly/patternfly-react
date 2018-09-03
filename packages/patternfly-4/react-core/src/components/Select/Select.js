import React from 'react';
import styles from '@patternfly/patternfly-next/components/FormControls/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** additional classes added to the Select control */
  className: PropTypes.string,
  /** value of selected option */
  value: PropTypes.any,
  /** Array of options OR array of option Groups available to select from.  If getOptionGroupLabel, it should be an array ofoption groups */
  options: PropTypes.array,
  /** flag indicating the options are grouped */
  isOptionsGrouped: PropTypes.bool,
  /** function to retrive the label for an option group */
  getOptionGroupLabel: PropTypes.func,
  /** function to retrive the array of options for an option group */
  getOptionFromGroup: PropTypes.func,
  /** function to retrive the label for an option */
  getOptionLabel: PropTypes.func,
  /** function to retrive the Value for an option */
  getOptionValue: PropTypes.func,
  /** function to retrive flag indicating if the option is disabled */
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
  isOptionsGrouped: false,
  getOptionGroupLabel: () => undefined,
  getOptionFromGroup: () => undefined,
  getOptionLabel: () => undefined,
  getOptionValue: () => undefined,
  getOptionDisabled: () => undefined,
  isValid: true,
  isDisabled: false,
  onBlur: () => undefined,
  onFocus: () => undefined,
  onChange: () => undefined,
  'aria-label': null
};

class Select extends React.Component {
  /** call callback to handle selection change */
  handleChange = event => {
    this.props.onChange(event);
  };

  /** call callback to handle selection change */
  handleBlur = event => {
    this.props.onBlur(event);
  };

  /** call callback to handle selection change */
  handleFocus = event => {
    this.props.onFocus(event);
  };

  /* returns the options */
  getOptions = options => {
    const { getOptionDisabled, getOptionValue, getOptionLabel } = this.props;
    return options
      ? options.map(
          (option, index) =>
            getOptionDisabled(option) ? (
              <option disabled key={index} value={getOptionValue(option)}>
                {getOptionLabel(option)}
              </option>
            ) : (
              <option key={index} value={getOptionValue(option)}>
                {getOptionLabel(option)}
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
      isOptionsGrouped,
      getOptionGroupLabel,
      getOptionFromGroup,
      getOptionDisabled,
      getOptionValue,
      getOptionLabel,
      isValid,
      isDisabled,
      onBlur,
      onFocus,
      ...props
    } = this.props;
    return (
      <select
        {...props}
        className={css(styles.formControl, className, !isValid && styles.modifiers.invalid)}
        aria-invalid={!isValid}
        onChange={this.handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={isDisabled}
        value={value}
      >
        {options &&
          (isOptionsGrouped
            ? options.map((group, index) => (
                <optgroup key={index} label={getOptionGroupLabel(group)}>
                  {this.getOptions(getOptionFromGroup(group))}
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
