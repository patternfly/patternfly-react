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
      showError: this.props.topErrorOnly ? true : this.props.showError,
      submitError: this.props.submitError,
      disableSubmit: true,
      isSubmitting: this.props.isSubmitting,
      topErrorOnly: this.props.topErrorOnly,
      errors: [this.props.submitError]
    }
  };

  componentDidMount() {
    window.addEventListener('keyup', this.toggleCapsLock);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.toggleCapsLock);
  }

  // eslint-disable-next-line class-methods-use-this
  static getDerivedStateFromProps(props, state) {
    // disableSubmit prop will only be used in a not validated login card
    const { validate, disableSubmit } = props;
    if (validate) {
      return null;
    }
    if (disableSubmit !== state.form.disableSubmit) {
      return {
        form: { disableSubmit }
      };
    }
    return null;
  }

  shouldDisableSubmit = (inputType, updatedInputValue) => {
    if (updatedInputValue.length < 1) {
      return true;
    }
    const otherInputType = inputType === 'usernameField' ? 'passwordField' : 'usernameField';
    const otherInputValue = this.state[otherInputType].value;
    return otherInputValue.length < 1;
  };

  onInputChange = (e, inputType) => {
    const {
      target: { value }
    } = e;
    this.props[inputType].onChange && this.props[inputType].onChange(e);
    this.setState(({ form }) => ({
      [inputType]: {
        ...this.state[inputType],
        value,
        showError: false
      },
      form: {
        ...form,
        disableSubmit: this.shouldDisableSubmit(inputType, value)
      }
    }));
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
    this.setState(({ form }) => ({
      form: {
        ...form,
        disableSubmit: true,
        isSubmitting: true,
        errors: form.topErrorOnly ? [] : form.topErrorOnly,
        showError: false
      }
    }));
  };

  onSubmitError = submitError => {
    this.setState(({ form }) => ({
      form: {
        ...form,
        showError: true,
        submitError,
        errors: [submitError],
        disableSubmit: false,
        isSubmitting: false
      }
    }));
  };

  getFormError = () => {
    const {
      form: { topErrorOnly, submitError, errors }
    } = this.state;
    return topErrorOnly
      ? errors.map((error, index) => (
          <div className="login-form-error" key={index}>
            {error}
          </div>
        ))
      : submitError;
  };

  getModifiedProps = () => {
    const { usernameField, passwordField, isCapsLock, form } = this.state;
    const {
      passwordField: { warnings }
    } = this.props;
    const passwordFieldWarningType = this.state.isCapsLock ? 'capsLock' : this.state.passwordField.warningType;
    return {
      usernameField: {
        ...this.props.usernameField,
        onChange: e => this.onInputChange(e, 'usernameField'),
        onFocus: e => this.onInputFocus(e, 'usernameField'),
        onBlur: e => this.onInputBlur(e, 'usernameField'),
        onKeyPress: e => this.onKeyPress(e, 'usernameField'),
        error: usernameField.error,
        showError: usernameField.showError
      },
      passwordField: {
        ...this.props.passwordField,
        onChange: e => this.onInputChange(e, 'passwordField'),
        onFocus: e => this.onInputFocus(e, 'passwordField'),
        onBlur: e => this.onInputBlur(e, 'passwordField'),
        onKeyPress: e => this.onKeyPress(e, 'passwordField'),
        warning: warnings && warnings[passwordFieldWarningType],
        showWarning: passwordField.isFocused && isCapsLock,
        error: passwordField.error,
        showError: passwordField.showError
      },
      onSubmit: e => this.onSubmit(e),
      showError: form.showError,
      disableSubmit: form.disableSubmit,
      isSubmitting: form.isSubmitting,
      submitError: this.getFormError()
    };
  };

  handleOnInputErrors = () => {
    const { usernameField, passwordField } = this.state;
    const { topErrorOnly } = this.props;

    topErrorOnly && this.clearFormErrors();

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

    !topErrorOnly && this.hideSubmitError();
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

  clearFormErrors = () => {
    this.setState(({ form }) => ({
      form: {
        ...form,
        errors: []
      }
    }));
  };

  handleOnPasswordTooShort = () => {
    const {
      passwordField: {
        errors: { short: error }
      }
    } = this.props;
    this.setState(({ form, passwordField }) =>
      form.topErrorOnly
        ? {
            form: {
              ...form,
              errors: [...form.errors, error],
              showError: true
            }
          }
        : {
            passwordField: {
              ...passwordField,
              error,
              showError: true
            }
          }
    );
  };

  handleOnInvalidUsername = () => {
    const {
      usernameField: {
        errors: { invalid: error }
      }
    } = this.props;
    this.setState(({ form, usernameField }) =>
      form.topErrorOnly
        ? {
            form: {
              ...form,
              errors: [...form.errors, error],
              showError: true
            }
          }
        : {
            usernameField: {
              ...usernameField,
              error,
              showError: true
            }
          }
    );
  };

  handleOnEmptyInput = inputType => {
    const {
      [inputType]: {
        errors: { empty: error }
      }
    } = this.props;
    this.setState(({ form }) =>
      form.topErrorOnly
        ? {
            form: {
              ...form,
              errors: [...form.errors, error],
              showError: true
            }
          }
        : {
            [inputType]: {
              ...this.state[inputType],
              error,
              showError: true
            }
          }
    );
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
  // eslint-disable-next-line react/no-unused-prop-types
  disableSubmit: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  showError: PropTypes.bool,
  topErrorOnly: PropTypes.bool
};

LoginCardWithValidation.defaultProps = {
  validate: true,
  usernameField: { ...LoginCardInput.defaultProps.usernameField },
  passwordField: { ...LoginCardInput.defaultProps.passwordField },
  onSubmit: e => e.target.submit(),
  submitError: null,
  disableSubmit: false,
  isSubmitting: false,
  showError: false,
  topErrorOnly: false
};

export default LoginCardWithValidation;
