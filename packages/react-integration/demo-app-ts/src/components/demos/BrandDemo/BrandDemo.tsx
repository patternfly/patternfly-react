import React from 'react';
import { Brand } from '@patternfly/react-core';
const pfLogo = './images/pfLogo.svg';

export class BrandDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <Brand src={pfLogo} alt="Patternfly Logo" />;
  }
}
