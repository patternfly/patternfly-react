import React from 'react';
import { Badge } from '@patternfly/react-core';

export class BadgeDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Badge isRead={false}>7</Badge>
        <Badge isRead={false}>24</Badge>
        <Badge isRead={false}>240</Badge>
        <Badge isRead={false}>999+</Badge>
      </React.Fragment>
    );
  }
}
