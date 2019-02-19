import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';

class ButtonVariants extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="tertiary">Tertiary</Button> <Button variant="danger">Danger</Button>{' '}
        <Button variant="link">
          <PlusCircleIcon /> Link button
        </Button>{' '}
        <Button variant="plain" aria-label="Action">
          <TimesIcon />
        </Button>
      </React.Fragment>
    );
  }
}

export default ButtonVariants;
