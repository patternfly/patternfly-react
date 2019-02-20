import React from 'react';
import { Badge } from '../Badge';

class ReadBadge extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Badge isRead>7</Badge> <Badge isRead>24</Badge> <Badge isRead>240</Badge> <Badge isRead>999+</Badge>
      </React.Fragment>
    );
  }
}

export default ReadBadge;
