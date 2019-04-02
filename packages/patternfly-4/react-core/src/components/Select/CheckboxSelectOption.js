import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import { default as checkStyles } from '@patternfly/patternfly/components/Check/check.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { SelectContext, KeyTypes } from './selectConstants';

const propTypes = {
  /** the value for the option */
  children: PropTypes.string,
  /** additional classes added to the Select Option */
  className: PropTypes.string,
  /** the value for the option */
  value: PropTypes.string,
  /** flag indicating if the option is disabled */
  isDisabled: PropTypes.bool,
  /** Optional on click callback */
  onClick: PropTypes.func,
  /** Additional props are spread to the container <button> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  value: null,
  isDisabled: false,
  onClick: Function.prototype
};

class CheckboxSelectOption extends React.Component {
  ref = React.createRef();

  componentDidMount() {
    this.props.sendRef(this.ref.current, this.props.index);
  }

  onKeyDown = event => {
    if (event.key === KeyTypes.Tab) return;
    event.preventDefault();
    if (event.key === KeyTypes.ArrowUp) {
      this.props.keyHandler(this.props.index, 'up');
    } else if (event.key === KeyTypes.ArrowDown) {
      this.props.keyHandler(this.props.index, 'down');
    } else if (event.key === KeyTypes.Enter || event.key === KeyTypes.Space) {
      this.ref.current.click && this.ref.current.click();
      this.ref.current.focus();
    }
  };

  render() {
    const {
      children,
      className,
      value,
      onClick,
      isDisabled,
      isChecked,
      sendRef,
      keyHandler,
      index,
      ...props
    } = this.props;
    return (
      <SelectContext.Consumer>
        {({ onSelect }) => (
          <label
            {...props}
            className={css(
              checkStyles.check,
              styles.selectMenuItem,
              isDisabled && styles.modifiers.disabled,
              className
            )}
            onKeyDown={this.onKeyDown}
          >
            <input
              id={value}
              className={css(checkStyles.checkInput)}
              type="checkbox"
              onChange={event => {
                if (!isDisabled) {
                  onClick && onClick(event);
                  onSelect && onSelect(event, value);
                }
              }}
              ref={this.ref}
              checked={isChecked || false}
              disabled={isDisabled}
            />
            <span className={css(checkStyles.checkLabel, isDisabled && styles.modifiers.disabled)}>{value}</span>
          </label>
        )}
      </SelectContext.Consumer>
    );
  }
}

CheckboxSelectOption.propTypes = propTypes;
CheckboxSelectOption.defaultProps = defaultProps;

export default CheckboxSelectOption;
