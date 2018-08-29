import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../Grid';

const ToolbarResults = ({ children, className, ...props }) => {
  const classes = classNames('toolbar-pf-results', className);
  if (!children) {
    return null;
  }
  return (
    <Row className={classes} {...props}>
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

ToolbarResults.defaultProps = {
  children: null,
  className: ''
};

ToolbarResults.displayName = 'ToolbarResults';

export default ToolbarResults;
