import React from 'react';
import styles from '@patternfly/patternfly/components/Switch/switch.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { getUniqueId } from '../../helpers/util';
import { CheckIcon } from '@patternfly/react-icons';

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
  /** Adds accessible text to the Switch, and should describe the isChecked="true" state. When label is defined, aria-label should be set to the text string that is visible when isChecked is true. */
  'aria-label': props => {
    if (!props.id && !props['aria-label']) {
      return new Error('Switch requires either an id or aria-label to be specified');
    }
  },
  /** Additional props are spread to the container <input> */
  '': PropTypes.any
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
        {label !== ''
          ? <React.Fragment>
              <span className={css(styles.switchToggle)} />
              <span className={css(styles.switchLabel, styles.modifiers.on)} aria-hidden="true">
                {label}
              </span>
              <span className={css(styles.switchLabel, styles.modifiers.off)} aria-hidden="true">
                {label}
              </span>
            </React.Fragment>
          : <span className={css(styles.switchToggle)}>
              <div className={css(styles.switchToggleIcon)} aria-hidden="true">
                <CheckIcon noVerticalAlign />
              </div>
            </span>}
      </label>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
