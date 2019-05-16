import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title';
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** content rendered inside the Header */
  children: PropTypes.node,
  /** additional classes added to the button */
  className: PropTypes.string,
  /** Flag to show the title */
  hideTitle: PropTypes.bool.isRequired,
  /** Additional props are spread to the container <header> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

const ModalBoxHeader = ({ hideTitle, children, className, ...props }) => {
  const hidden = hideTitle ? css(accessibleStyles.screenReader) : '';

  return <React.Fragment>
    <Title size="2xl" headingLevel="h3" className={className + hidden} {...props}>
      {children}
    </Title>
  </React.Fragment>;
};

ModalBoxHeader.propTypes = propTypes;
ModalBoxHeader.defaultProps = defaultProps;

export default ModalBoxHeader;
