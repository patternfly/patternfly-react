import React from 'react';
import { Banner } from '@patternfly/react-core';

export class BannerDemo extends React.Component {
  static displayName = 'BannerDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Banner isSticky>Default banner</Banner>
        <br />
        <Banner variant="info">Info banner</Banner>
        <br />
        <Banner variant="danger">Danger banner</Banner>
        <br />
        <Banner variant="success">Success banner</Banner>
        <br />
        <Banner variant="warning">Warning banner</Banner>
      </React.Fragment>
    );
  }
}
