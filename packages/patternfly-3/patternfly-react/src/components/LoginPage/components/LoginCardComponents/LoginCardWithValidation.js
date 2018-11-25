import React from 'react';
import PropTypes from 'prop-types';
import LoginCardInput from './LoginCardInput';
import { KEY_CODES, KEYS } from '../../../../common/helpers';

class LoginCardWithValidation extends React.Component {
  state = {
    usernameField: {
      value: '',
      errorType: null,
      isFocused: false,
      showError: false
    },
    passwordField: {
      value: '',
      errorType: null,
      warningType: null,
      isFocused: false,
      showError: false
    },
    isCapsLock: false,
    form: {
      showError: this.props.showError,
      submitError: this.props.submitError,
      disableSubmit: this.props.disableSubmit,
      isSubmitting: this.props.isSubmitting
    }
  };

  componentDidMount() {
    window.addEventListener('keyup', this.toggleCapsLock);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.toggleCapsLock);
  }

  onInputChange = (e, inputType) => {
    this.props[inputType].onChange && this.props[inputType].onChange(e);
    this.setState({
      [inputType]: {
        ...this.state[inputType],
        value: e.target.value,
        showError: false
      }
    });
  };

  onInputFocus = (e, inputType) => {
    this.props[inputType].onFocus && this.props[inputType].onFocus(e);
    this.setState({
      [inputType]: {
        ...this.state[inputType],
        isFocused: true,
        showError: false
      }
    });
  };

  onInputBlur = (e, inputType) => {
    this.props[inputType].onBlur && this.props[inputType].onBlur(e);
    this.setState({
      [inputType]: {
        ...this.state[inputType],
        isFocused: false,
        showError: false
      },
      isCapsLock: false
    });
  };

  onKeyPress = (e, inputType) => {
    this.props[inputType].onMouseEnter && this.props[inputType].onMouseEnter(e);
    this.handleCapsLock(e);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.onSubmitStart();
      this.props.onSubmit(e, this.onSubmitError);
    } else {
      this.handleOnInputErrors();
    }
  };

  onSubmitStart = () => {
    this.setState({
      form: {
        ...this.state.form,
        disableSubmit: true,
        isSubmitting: true,
        showError: false
      }
    });
  };

  onSubmitError = submitError => {
    this.setState({
      form: {
        ...this.state.form,
        showError: true,
        submitError,
        disableSubmit: false,
        isSubmitting: false
      }
    });
  };

  getModifiedProps = () => {
    const { usernameField, passwordField } = this.props;
    const passwordFieldWarningType = this.state.isCapsLock ? 'capsLock' : this.state.passwordField.warningType;
    return {
      usernameField: {
        ...usernameField,
        onChange: e => this.onInputChange(e, 'usernameField'),
        onFocus: e => this.onInputFocus(e, 'usernameField'),
        onBlur: e => this.onInputBlur(e, 'usernameField'),
        onKeyPress: e => this.onKeyPress(e, 'usernameField'),
        error: usernameField.errors[this.state.usernameField.errorType],
        showError: this.state.usernameField.showError
      },
      passwordField: {
        ...passwordField,
        onChange: e => this.onInputChange(e, 'passwordField'),
        onFocus: e => this.onInputFocus(e, 'passwordField'),
        onBlur: e => this.onInputBlur(e, 'passwordField'),
        onKeyPress: e => this.onKeyPress(e, 'passwordField'),
        warning: passwordField.warnings[passwordFieldWarningType],
        showWarning: this.state.passwordField.isFocused && this.state.isCapsLock,
        error: passwordField.errors[this.state.passwordField.errorType],
        showError: this.state.passwordField.showError
      },
      onSubmit: e => this.onSubmit(e),
      showError: this.state.form.showError,
      disableSubmit: this.state.form.disableSubmit,
      isSubmitting: this.state.form.isSubmitting,
      submitError: this.state.form.submitError
    };
  };

  handleOnInputErrors = () => {
    const { usernameField, passwordField } = this.state;
    if (usernameField.value) {
      !this.isUserNameValid() && this.handleOnInvalidUsername();
    } else {
      this.handleOnEmptyInput('usernameField');
    }

    if (passwordField.value) {
      this.isPasswordShort() && this.handleOnPasswordTooShort();
    } else {
      this.handleOnEmptyInput('passwordField');
    }

    this.hideSubmitError();
  };

  isFormValid = () =>
    !!this.state.usernameField.value &&
    !!this.state.passwordField.value &&
    !this.isPasswordShort() &&
    this.isUserNameValid();

  isPasswordShort = () => {
    const {
      passwordField: { minLength: passwordMinLength }
    } = this.props;
    const {
      passwordField: {
        value: { length: currentPasswordLength }
      }
    } = this.state;
    return passwordMinLength > 0 && currentPasswordLength < passwordMinLength;
  };

  hideSubmitError = () => {
    this.setState({
      form: {
        ...this.state.form,
        showError: false
      }
    });
  };

  handleOnPasswordTooShort = () => {
    this.setState({
      passwordField: {
        ...this.state.passwordField,
        errorType: 'short',
        showError: true
      }
    });
  };

  handleOnInvalidUsername = error => {
    this.setState({
      usernameField: {
        ...this.state.usernameField,
        errorType: 'invalid',
        showError: true
      }
    });
  };

  handleOnEmptyInput = inputType => {
    this.setState({
      [inputType]: {
        ...this.state[inputType],
        errorType: 'empty',
        showError: true
      }
    });
  };

  toggleCapsLock = e => {
    if (!this.state.passwordField.value) {
      return;
    }
    e.key === KEYS.CAPSLOCK &&
      this.setState({
        isCapsLock: !this.state.isCapsLock
      });
  };

  handleCapsLock = e => {
    const keyCode = e.keyCode ? e.keyCode : e.which;
    const shiftKey = e.shiftKey ? e.shiftKey : keyCode === KEY_CODES.SHIFT;
    const isCapsLock =
      (keyCode >= KEY_CODES.A && keyCode <= KEY_CODES.Z && !shiftKey) ||
      (keyCode >= KEY_CODES.NUMPAD['0'] && keyCode <= KEY_CODES.F11 && shiftKey);
    this.setState({
      isCapsLock
    });
  };

  isUserNameValid = () => {
    const {
      usernameField: { type: userType }
    } = this.props;
    if (userType === 'email') {
      const mailAddress = this.state.usernameField.value;
      const atPos = mailAddress.indexOf('@');
      const dotPos = mailAddress.lastIndexOf('.');
      return atPos > 1 && dotPos - atPos > 2 && atPos < dotPos;
    }
    return true;
  };

  render() {
    const { validate, children } = this.props;
    return validate
      ? React.cloneElement(children, {
          ...this.props,
          ...this.getModifiedProps()
        })
      : React.cloneElement(children, { ...this.props });
  }
}

LoginCardWithValidation.propTypes = {
  validate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  usernameField: PropTypes.shape({
    ...LoginCardInput.propTypes,
    errors: PropTypes.object
  }),
  passwordField: PropTypes.shape({
    ...LoginCardInput.propTypes,
    errors: PropTypes.object,
    warnings: PropTypes.object,
    minLength: PropTypes.number
  }),
  onSubmit: PropTypes.func,
  submitError: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disableSubmit: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  showError: PropTypes.bool
};

LoginCardWithValidation.defaultProps = {
  validate: true,
  usernameField: { ...LoginCardInput.defaultProps.usernameField },
  passwordField: { ...LoginCardInput.defaultProps.passwordField },
  onSubmit: e => e.target.submit(),
  submitError: null,
  disableSubmit: false,
  isSubmitting: false,
  showError: false
};

export default LoginCardWithValidation;
