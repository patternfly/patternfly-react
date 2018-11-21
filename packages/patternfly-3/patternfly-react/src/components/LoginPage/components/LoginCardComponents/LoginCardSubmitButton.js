import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from '../../../../index';

const LoginCardSubmitButton = ({ isDisabled, children, isLoading }) => (
  <Button className="login-pf-submit-button" type="submit" bsStyle="primary" bsSize="large" block disabled={isDisabled}>
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
  isDisabled: PropTypes.bool,
  children: PropTypes.string,
  isLoading: PropTypes.bool
};

LoginCardSubmitButton.defaultProps = {
  isDisabled: false,
  children: null,
  isLoading: false
};

export default LoginCardSubmitButton;
