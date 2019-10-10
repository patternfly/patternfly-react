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
        <Divider variant="li" role="separator"/>
        <Divider variant="div" role="separator"/>
      </React.Fragment>
    );
  }
}
