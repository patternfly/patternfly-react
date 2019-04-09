import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonVariant } from '../Button';

const propTypes = {
  /** content rendered inside the AlertLinkAction */
  children: PropTypes.string,
  /** additional classes added to the AlertActionLink */
  className: PropTypes.string,
  /** Additional props are spread to the container <Button>  */
  '': PropTypes.any
};

const defaultProps = {
  children: '',
  className: ''
};

const AlertActionLink = ({ className, variantLabel, children, ...props }) => (
  <Button variant={ButtonVariant.link} {...props}>
    {children}
  </Button>
);

AlertActionLink.propTypes = propTypes;
AlertActionLink.defaultProps = defaultProps;

export default AlertActionLink;
