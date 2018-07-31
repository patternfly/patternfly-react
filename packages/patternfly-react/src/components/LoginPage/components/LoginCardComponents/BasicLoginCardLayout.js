import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '../../../../index';

const BasicLoginCardLayout = ({ children, layout, ...props }) => (
  <Grid {...props} fluid>
    <Row>
      <Col
        sm={10}
        smOffset={1}
        md={8}
        mdOffset={2}
        lg={8}
        lgOffset={2}
        {...layout}
      >
        {children}
      </Col>
    </Row>
  </Grid>
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
