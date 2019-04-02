/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { SkipToContent } from '@patternfly/react-core';

class SimpleSkipToContent extends React.Component {
  render() {
    return <SkipToContent href="#main-content">Skip to Content</SkipToContent>;
  }
}

export default SimpleSkipToContent;
