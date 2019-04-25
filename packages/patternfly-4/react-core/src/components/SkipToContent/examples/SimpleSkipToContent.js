import React from 'react';
import { SkipToContent } from '@patternfly/react-core';

// eslint-disable-next-line react/prefer-stateless-function
class SimpleSkipToContent extends React.Component {
  render() {
    return <SkipToContent href="#main-content">Skip to Content</SkipToContent>;
  }
}

export default SimpleSkipToContent;
