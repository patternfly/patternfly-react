import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../../index';

const ToolbarResults = ({ children, className, ...rest }) => {
  const classes = cx('toolbar-pf-results', className);
  if (!children) {
    return null;
  }
  return (
    <Row className={classes} {...rest}>
      <Col sm={12}>{children}</Col>
    </Row>
  );
};

ToolbarResults.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

export default ToolbarResults;
