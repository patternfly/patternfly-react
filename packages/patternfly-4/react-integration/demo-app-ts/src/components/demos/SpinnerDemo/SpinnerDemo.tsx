import React from 'react';
import { Spinner, SpinnerProps } from '@patternfly/react-core/dist/esm/experimental';

export class SpinnerDemo extends React.Component<SpinnerProps> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Spinner />
        <span>
          <div>Size variations</div>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </span>
      </React.Fragment>
    );
  }
}
