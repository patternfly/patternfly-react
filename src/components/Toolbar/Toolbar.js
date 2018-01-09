import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import { Grid, Col, Row, ToolbarResults } from '../../index';

import {
  toolbarContextTypes,
  getToolbarContext,
  ToolbarContextProvider
} from './ToolbarConstants';

const Toolbar = ({ children, className, ...rest }) => {
  const childrenArray =
    children &&
    React.Children.count(children) > 0 &&
    React.Children.toArray(children);

  const toolbarChildren =
    childrenArray &&
    childrenArray.filter(child => child.type !== ToolbarResults);
  const resultsChildren =
    childrenArray &&
    childrenArray.filter(child => child.type === ToolbarResults);

  return (
    <ToolbarContextProvider isDescendantOfToolbar>
      <Grid fluid className={className}>
        <Row className="toolbar-pf">
          <Col sm={12}>
            <form className="toolbar-pf-actions">{toolbarChildren}</form>
            {resultsChildren}
          </Col>
        </Row>
      </Grid>
    </ToolbarContextProvider>
  );
};

Toolbar.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

export default withContext(toolbarContextTypes, getToolbarContext)(Toolbar);
