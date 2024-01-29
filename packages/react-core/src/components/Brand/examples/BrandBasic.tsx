import React from 'react';
import { Brand } from '@patternfly/react-core';
import pfLogo from '../../assets/PF-HorizontalLogo-Color.svg';
import pfLogoDark from '../../assets/PF-HorizontalLogo-Reverse.svg';

export const BrandBasic: React.FunctionComponent = () => (
  <>
    <div className="show-light">
      <Brand src={pfLogo} alt="Patternfly" widths={{ default: '200px', md: '400px', xl: '600px' }} />
    </div>
    <div className="show-dark">
      <Brand src={pfLogoDark} alt="Patternfly" widths={{ default: '200px', md: '400px', xl: '600px' }} />
    </div>
  </>
);
