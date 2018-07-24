import React from 'react';
import { {{componentName}} } from '@patternfly/react-core';

class Simple{{componentName}} extends React.Component {
  static title = 'Simple {{componentName}}';

  render() {
    return (
      <{{componentName}} />
    );
  }
}

export default Simple{{componentName}};
