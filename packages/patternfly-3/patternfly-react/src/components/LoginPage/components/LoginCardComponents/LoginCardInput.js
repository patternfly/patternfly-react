import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl, FormGroup, Overlay, Tooltip } from '../../../../index';

import { noop } from '../../../../common/helpers';

class LoginCardInput extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      showTooltip: false
    };
  }

  showTooltip = validationState => {
    this.setState({
      showTooltip: validationState && true
    });
  };

  hideTooltip = () => {
    this.setState({
      showTooltip: false
    });
  };

  render() {
    const {
      id,
      type,
      placeholder,
      size,
      error,
      warning,
      onChange,
      onFocus,
      onBlur,
      onKeyPress,
      showError,
      showWarning,
      className,
      autoComplete,
      attributes
    } = this.props;
    const { showTooltip } = this.state;
    // eslint-disable-next-line no-nested-ternary
    const validationState = showError ? 'error' : showWarning ? 'warning' : null;
    const tooltip = <Tooltip id={`${id}-tooltip`}>{showWarning ? warning : error}</Tooltip>;
    const inputRef = this.input.current;
    return (
      <FormGroup
        className={classNames('login_card_input', className)}
        controlId={id}
        validationState={validationState}
        ref={this.input}
        onMouseEnter={e => this.showTooltip(!!validationState)}
        onMouseLeave={this.hideTooltip}
      >
        <FormControl
          {...attributes}
          type={type}
          placeholder={placeholder}
          bsSize={size}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          autoComplete={autoComplete}
        />
        <FormControl.Feedback />
        <Overlay placement="right" target={inputRef} show={showTooltip}>
          {tooltip}
        </Overlay>
      </FormGroup>
    );
  }
}

LoginCardInput.propTypes = {
  /** The input's id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The input's HTML type */
  type: PropTypes.string,
  /** The input's placeholder */
  placeholder: PropTypes.string,
  /** The bsSize of the input */
  size: PropTypes.string,
  /** The error which is presented under the input */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The warning which is presented under the input */
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** A callback which is fired when the input changes. */
  onChange: PropTypes.func,
  /** Controlls the warning visibility */
  showWarning: PropTypes.bool,
  /** A callback which is fired when the input blurs. */
  onBlur: PropTypes.func,
  /** A callback which is fired when the input is focused. */
  onFocus: PropTypes.func,
  /** A callback which is fired on a key press. */
  onKeyPress: PropTypes.func,
  /** A callback which is fired when the input blurs. */
  showError: PropTypes.bool,
  /** An additional css classes */
  className: PropTypes.string,
  /** Sets the HTML autocomplete */
  autoComplete: PropTypes.string,
  /** Additional HTML input's attributes. */
  attributes: PropTypes.object
};

LoginCardInput.defaultProps = {
  id: Math.random().toString(),
  type: 'text',
  placeholder: 'Enter Text',
  size: 'lg',
  error: null,
  warning: null,
  onChange: noop,
  showWarning: false,
  onBlur: noop,
  onFocus: noop,
  onKeyPress: noop,
  showError: false,
  className: null,
  autoComplete: '',
  attributes: null
};

export default LoginCardInput;
