import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../../../../index';

const BasicLoginCardLayout = ({ children, ...props }) => (
  <Row>
    <Col sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2} {...props}>
      {children}
    </Col>
  </Row>
);

BasicLoginCardLayout.propTypes = {
  /** Children nodes. */
  children: PropTypes.node,
  /** Additional layout props to override the default ones. */
  layout: PropTypes.object
};

BasicLoginCardLayout.defaultProps = {
  children: null,
  layout: null
};

export default BasicLoginCardLayout;
