import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';

const propTypes = {
  /** content rendered inside the Header */
  children: PropTypes.node,
  /** additional classes added to the button */
  className: PropTypes.string,
  /** Additional props are spread to the container <header> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

const ModalBoxHeader = ({ children, className, ...props }) => (
  <React.Fragment>
    <Title size="2xl" {...props}>
      {children}
    </Title>
  </React.Fragment>
);

ModalBoxHeader.propTypes = propTypes;
ModalBoxHeader.defaultProps = defaultProps;

export default ModalBoxHeader;
