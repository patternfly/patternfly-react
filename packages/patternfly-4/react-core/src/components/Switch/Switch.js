import React from 'react';
import styles from '@patternfly/patternfly-next/components/Switch/switch.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { getUniqueId } from '../../internal/util';

const propTypes = {
  /** id for the label. */
  id: PropTypes.string,
  /** Additional classes added to the Switch */
  className: PropTypes.string,
  /** Text value for the label */
  label: PropTypes.string,
  /** Flag to show if the Switch is checked. */
  isChecked: PropTypes.bool,
  /** Flag to show if the Switch is disabled. */
  isDisabled: PropTypes.bool,
  /** A callback for when the Switch selection changes. (isChecked, event) => {} */
  onChange: PropTypes.func,
  /** Adds accessible text to the Switch. */
  'aria-label': props => {
    if (!props.id && !props['aria-label']) {
      return new Error('Switch requires either an id or aria-label to be specified');
    }
  }
};

const defaultProps = {
  id: '',
  className: '',
  label: '',
  isChecked: true,
  isDisabled: false,
  onChange: () => undefined,
  'aria-label': ''
};

class Switch extends React.Component {
  id = this.props.id || getUniqueId();

  render() {
    const { id, className, label, isChecked, isDisabled, onChange, ...props } = this.props;
    return (
      <label className={css(styles.switch, className)} htmlFor={this.id}>
        <input
          {...props}
          id={this.id}
          className={css(styles.switchInput)}
          type="checkbox"
          onChange={event => onChange(event.currentTarget.checked, event)}
          checked={isChecked}
          disabled={isDisabled}
        />
        <span className={css(styles.switchToggle)} />
        {label && (
          <span className={css(styles.switchLabel)} aria-hidden="true">
            {label}
          </span>
        )}
      </label>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
