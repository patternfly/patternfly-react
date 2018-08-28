import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import { hasDisplayName, filterChildren } from '../../common/helpers';
import { Grid } from '../Grid';
import ToolbarResults from './ToolbarResults';
import ToolbarRightContent from './ToolbarRightContent';
import ToolbarFind from './ToolbarFind';
import ToolbarViewSelector from './ToolbarViewSelector';

import { toolbarContextTypes, getToolbarContext, ToolbarContextProvider } from './ToolbarConstants';

const ContextualToolbar = ({ children, className, ...props }) => {
  const toolbarChildren = filterChildren(children, child => !hasDisplayName(child, ToolbarResults.displayName));
  const resultsChildren = filterChildren(children, child => hasDisplayName(child, ToolbarResults.displayName));

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

ContextualToolbar.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

ContextualToolbar.defaultProps = {
  children: null,
  className: ''
};

const Toolbar = withContext(toolbarContextTypes, getToolbarContext)(ContextualToolbar);

Toolbar.Results = ToolbarResults;
Toolbar.RightContent = ToolbarRightContent;
Toolbar.Find = ToolbarFind;
Toolbar.ViewSelector = ToolbarViewSelector;

export default Toolbar;
