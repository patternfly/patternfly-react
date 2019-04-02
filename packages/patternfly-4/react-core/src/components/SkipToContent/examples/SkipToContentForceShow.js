/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { SkipToContent } from '@patternfly/react-core';

class SkipToContentForceShow extends React.Component {
  render() {
    return (
      <SkipToContent href="#main-content" show>
        Skip to Content
      </SkipToContent>
    );
  }
}

export default SkipToContentForceShow;
