import React from 'react';
import { Button } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class LinkButtons extends React.Component {
  static title = 'Links';
  static description = `Links with button styling. Semantic buttons and links are important for usability as well as accessibility. Using an "a" instead of a "button" element to perform user initiated actions should be avoided, unless absolutely necessary.`;
  static getContainerProps = getContainerProps;

  render() {
    return (
      <React.Fragment>
        <Button component="a" href="https://pf-next.com/" target="_blank">
          Link to Core Docs
        </Button>
        <Button component="a" isDisabled href="https://pf-next.com/" target="_blank">
          Disabled Link
        </Button>
      </React.Fragment>
    );
  }
}

export default LinkButtons;
