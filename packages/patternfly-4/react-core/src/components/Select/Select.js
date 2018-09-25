import React from 'react';
import styles from '@patternfly/patternfly-next/components/FormControl/form-control.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Select */
  children: PropTypes.node.isRequired,
  /** additional classes added to the Select control */
  className: PropTypes.string,
  /** value of selected option */
  value: PropTypes.any,
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

  render() {
    const { children, className, value, isValid, isDisabled, ...props } = this.props;
    return (
      <select
        {...props}
        className={css(styles.formControl, className)}
        aria-invalid={!isValid}
        onChange={this.handleChange}
        disabled={isDisabled}
        value={value}
      >
        {children}
      </select>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
