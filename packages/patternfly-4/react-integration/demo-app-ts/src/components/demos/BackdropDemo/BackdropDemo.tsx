import React from 'react';
import { Backdrop } from '@patternfly/react-core';

export class BackdropDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Backdrop className="backdrop" />
    );
  }
}

