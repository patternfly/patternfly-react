import React from 'react';
import { Brand } from '@patternfly/react-core';
import brandImg from './pf_logo.svg';

class SimpleBrand extends React.Component {
  render() {
    return <Brand src={brandImg} alt="Brand Image" />;
  }
}

export default SimpleBrand;
