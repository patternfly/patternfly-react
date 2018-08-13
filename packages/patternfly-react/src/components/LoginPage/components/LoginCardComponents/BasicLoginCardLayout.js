import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../../../../index';

const BasicLoginCardLayout = ({ children, layout, ...props }) => (
  <Row>
    <Col sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2} {...layout}>
      {children}
    </Col>
  </Row>
);

BasicLoginCardLayout.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.object
};

BasicLoginCardLayout.defaultProps = {
  children: null,
  layout: null
};

export default BasicLoginCardLayout;
