import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/alert.css';
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

const AlertActionLink = ({ className, children, ...props }) => (
  <Button variant={ButtonVariant.link} {...props}>
    {children}
  </Button>
);

AlertActionLink.propTypes = propTypes;
AlertActionLink.defaultProps = defaultProps;

export default AlertActionLink;
