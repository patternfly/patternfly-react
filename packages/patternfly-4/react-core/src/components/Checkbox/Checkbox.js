import React from 'react';
import styles from '@patternfly/patternfly-next/components/Check/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  children: null,
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
    const { className, children, onChange, isValid, isDisabled, ...props } = this.props;
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
