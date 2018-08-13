import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import { Grid, ToolbarResults } from '../../index';

import { toolbarContextTypes, getToolbarContext, ToolbarContextProvider } from './ToolbarConstants';

const Toolbar = ({ children, className, ...props }) => {
  const childrenArray = children && React.Children.count(children) > 0 && React.Children.toArray(children);

  const toolbarChildren =
    childrenArray && childrenArray.filter(child => child.type.displayName !== ToolbarResults.displayName);
  const resultsChildren =
    childrenArray && childrenArray.filter(child => child.type.displayName === ToolbarResults.displayName);

  return (
    <ToolbarContextProvider isDescendantOfToolbar>
      <Grid fluid className={className}>
        <Grid.Row className="toolbar-pf">
          <Grid.Col sm={12}>
            <form className="toolbar-pf-actions">{toolbarChildren}</form>
            {resultsChildren}
          </Grid.Col>
        </Grid.Row>
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

Toolbar.defaultProps = {
  children: null,
  className: ''
};

export default withContext(toolbarContextTypes, getToolbarContext)(Toolbar);
