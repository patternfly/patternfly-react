import React from 'react';
import { Brand } from '@patternfly/react-core';
import pfLogo from './images/pfLogo.svg';

export class BrandDemo extends React.Component {
  render() {
    return (
      <Brand src={pfLogo} alt="Patternfly Logo" />
    );
  }
}

  