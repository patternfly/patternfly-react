import React from 'react';
import { Brand } from '@patternfly/react-core';
import pfLogo from '../../assets/pfLogo.svg';

export const BrandBasic: React.FunctionComponent = () => (
  <Brand src={pfLogo} alt="Patternfly Logo" widths={{ default: '200px', md: '400px', xl: '600px' }} />
);
