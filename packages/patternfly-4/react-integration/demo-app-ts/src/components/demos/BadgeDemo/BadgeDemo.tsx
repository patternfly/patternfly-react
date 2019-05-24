import React from 'react'; 
import { Badge } from '@patternfly/react-core';

export class BadgeDemo extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Badge isRead={false}>7</Badge>
          <Badge isRead={false}>24</Badge>
          <Badge isRead={false}>240</Badge>
          <Badge isRead={false}>999+</Badge>
        </React.Fragment>
    )
  }
}