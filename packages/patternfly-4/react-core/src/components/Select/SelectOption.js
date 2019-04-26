import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import { css } from '@patternfly/react-styles';
import { CheckIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import { SelectContext, KeyTypes } from './selectConstants';

const propTypes = {
  /** additional classes added to the Select Option */
  className: PropTypes.string,
  /** the value for the option */
  value: PropTypes.string,
  /** internal index of the option */
  index: PropTypes.number,
  /** flag indicating if the option is disabled */
  isDisabled: PropTypes.bool,
  /** flag indicating if the option acts as a placeholder */
  isPlaceholder: PropTypes.bool,
  /** Internal flag indicating if the option is selected */
  isSelected: PropTypes.bool,
  /** Optional on click callback */
  onClick: PropTypes.func,
  /** Internal callback for ref tracking */
  sendRef: PropTypes.func,
  /** Internal callback for keyboard navigation */
  keyHandler: PropTypes.func,
  /** Additional props are spread to the container <button> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  value: null,
  index: 0,
  isDisabled: false,
  isPlaceholder: false,
  isSelected: false,
  onClick: Function.prototype,
  sendRef: Function.prototype,
  keyHandler: Function.prototype
};

class SelectOption extends React.Component {
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
    } else if (event.key === KeyTypes.Enter) {
      this.ref.current.click && this.ref.current.click();
    }
  };

  render() {
    const {
      className,
      value,
      onClick,
      isDisabled,
      isPlaceholder,
      isSelected,
      sendRef,
      keyHandler,
      index,
      ...props
    } = this.props;
    return (
      <SelectContext.Consumer>
        {({ onSelect, onClose }) => (
          <li role="presentation">
            <button
              {...props}
              className={css(
                styles.selectMenuItem,
                isSelected && styles.modifiers.selected,
                isDisabled && styles.modifiers.disabled,
                className
              )}
              onClick={event => {
                if (!isDisabled) {
                  onClick && onClick(event);
                  onSelect && onSelect(event, value, isPlaceholder);
                  onClose && onClose();
                }
              }}
              role="option"
              aria-selected={isSelected || null}
              ref={this.ref}
              onKeyDown={this.onKeyDown}
            >
              {value}
              {isSelected && <CheckIcon noVerticalAlign className={css(styles.selectMenuItemIcon)} aria-hidden />}
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
