import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '../../../../index';

const BasicLoginPageLayout = ({ children, layout, ...props }) => (
  <Grid {...props} fluid>
    <Row>
      <Col sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3} {...layout}>
        {children}
      </Col>
    </Row>
  </Grid>
);

BasicLoginPageLayout.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.object
};

BasicLoginPageLayout.defaultProps = {
  children: null,
  layout: null
};

export default BasicLoginPageLayout;
