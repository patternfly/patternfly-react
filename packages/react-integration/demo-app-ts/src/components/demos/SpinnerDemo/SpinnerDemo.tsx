import React from 'react';
import { Spinner } from '@patternfly/react-core';

export class SpinnerDemo extends React.Component {
  static displayName = 'SpinnerDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Spinner isSVG diameter="40px" id="spinner40" />
        <span>
          <div>Size variations</div>
          <Spinner isSVG size="sm" />
          <Spinner isSVG size="md" />
          <Spinner isSVG size="lg" />
          <Spinner isSVG size="xl" />
        </span>
      </React.Fragment>
    );
  }
}
