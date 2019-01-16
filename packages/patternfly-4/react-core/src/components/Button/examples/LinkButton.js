import React from 'react';
import { Button } from '@patternfly/react-core';

class LinkButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button component="a" href="https://pf-next.com/" target="_blank" variant="primary">
          Link to Core Docs
        </Button>{' '}
        <Button component="a" href="https://pf-next.com/" target="_blank" variant="secondary">
          Secondary Link to Core Docs
        </Button>{' '}
        <Button component="a" isDisabled href="https://pf-next.com/" target="_blank" variant="tertiary">
          Tertiary Link to Core Docs
        </Button>
      </React.Fragment>
    );
  }
}

export default LinkButton;
