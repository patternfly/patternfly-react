import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';

const toolbarContextTypes = { isDescendantOfToolbar: PropTypes.bool };

const getToolbarContext = props => ({
  isDescendantOfToolbar: props.isDescendantOfToolbar
});

const provideToolbarContext = withContext(toolbarContextTypes, getToolbarContext);

const ToolbarContextProvider = provideToolbarContext(props => <React.Fragment>{props.children}</React.Fragment>);

export { toolbarContextTypes, getToolbarContext, ToolbarContextProvider };
