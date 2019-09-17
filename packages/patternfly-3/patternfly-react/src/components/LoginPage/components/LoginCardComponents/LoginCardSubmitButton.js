import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from '../../../../index';

const LoginCardSubmitButton = ({ isDisabled, children, isLoading, attributes }) => (
  <Button
    className="login-pf-submit-button"
    type="submit"
    bsStyle="primary"
    bsSize="large"
    block
    disabled={isDisabled}
    {...attributes}
  >
    {children}
    {isLoading ? (
      <span>
        {' '}
        <Spinner loading={isLoading} inline size="xs" />
      </span>
    ) : null}
  </Button>
);

LoginCardSubmitButton.propTypes = {
  /** Sets the button disability  */
  isDisabled: PropTypes.bool,
  /** Children nodes */
  children: PropTypes.string,
  /** Sets the spinner visibility */
  isLoading: PropTypes.bool,
  /** Override the button attributes */
  attributes: PropTypes.object
};

LoginCardSubmitButton.defaultProps = {
  isDisabled: false,
  children: null,
  isLoading: false,
  attributes: {}
};

export default LoginCardSubmitButton;
