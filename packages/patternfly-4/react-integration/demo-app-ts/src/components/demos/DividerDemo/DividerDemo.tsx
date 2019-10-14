import React from 'react';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

export class DividerDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Divider/>

        <ul>
          <li>List item one</li>
          <Divider component="li" role="separator"/>
          <li>List item two</li>
        </ul>

        <Divider component="div" role="separator"/>
      </React.Fragment>
    );
  }
}
