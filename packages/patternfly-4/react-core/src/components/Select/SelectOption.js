import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { SelectContext } from './selectConstants';

const propTypes = {
  /** the value for the option */
  children: PropTypes.string,
  /** additional classes added to the Select Option */
  className: PropTypes.string,
  /** the value for the option */
  value: PropTypes.string,
  /** flag indicating if the option is disabled */
  isDisabled: PropTypes.bool,
  /** flag indicating if the option acts as a placeholder */
  isPlaceholder: PropTypes.bool,
  /** Optional on click callback */
  onClick: PropTypes.func,
  /** Callback for ref tracking */
  sendRef: PropTypes.func,
  /** Additional props are spread to the container <button> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  value: null,
  isDisabled: false,
  isPlaceholder: false,
  onClick: Function.prototype
};

class SelectOption extends React.Component {
  ref = React.createRef();

  componentDidMount() {
    this.props.sendRef(this.ref, this.props.index);
  }

  onKeyDown = event => {
    if (event.key === 'Tab') return;
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      this.props.keyHandler(this.props.index, 'up');
    } else if (event.key === 'ArrowDown') {
      this.props.keyHandler(this.props.index, 'down');
    } else if (event.key === 'Enter') {
      this.ref.current.click && this.ref.current.click();
    }
  };

  render() {
    const {
      children,
      className,
      value,
      onClick,
      isDisabled,
      isPlaceholder,
      selected,
      sendRef,
      keyHandler,
      index,
      ...props
    } = this.props;
    return (
      <SelectContext.Consumer>
        {onSelect => (
          <li>
            <button
              {...props}
              className={css(
                styles.selectMenuItem,
                selected && styles.selectMenuItemMatch,
                isDisabled && styles.modifiers.disabled,
                className
              )}
              onClick={event => {
                if (!isDisabled) {
                  onClick && onClick(event);
                  onSelect && onSelect(event, value || children, isPlaceholder);
                }
              }}
              role="option"
              aria-selected={selected || null}
              ref={this.ref}
              onKeyDown={this.onKeyDown}
            >
              {value || children}
            </button>
          </li>
        )}
      </SelectContext.Consumer>
    );
  }
}

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;

export default SelectOption;
