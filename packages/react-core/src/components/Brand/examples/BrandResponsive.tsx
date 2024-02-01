import React from 'react';
import { Brand } from '@patternfly/react-core';

import pfLogo from '../../assets/PF-HorizontalLogo-Color.svg';
import pfLogoDark from '../../assets/PF-HorizontalLogo-Reverse.svg';
import pfLogoSm from '../../assets/PF-IconLogo-color.svg';
import pfLogoSmDark from '../../assets/PF-IconLogo-Reverse.svg';

export const BrandBasic: React.FunctionComponent = () => (
  <>
    <div className="show-light">
      <Brand src={pfLogo} alt="Patternfly" widths={{ default: '40px', sm: '60px', md: '220px' }}>
        <source media="(min-width: 1200px)" srcSet={pfLogo} />
        <source media="(min-width: 992px)" srcSet={pfLogo} />
        <source media="(min-width: 768px)" srcSet={pfLogo} />
        <source media="(min-width: 576px)" srcSet={pfLogoSm} />
        <source media="(min-width: 320px)" srcSet={pfLogoSm} />
        <source srcSet={pfLogo} />
      </Brand>
    </div>
    <div className="show-dark">
      <Brand src={pfLogoDark} alt="Patternfly" widths={{ default: '40px', sm: '60px', md: '220px' }}>
        <source media="(min-width: 1200px)" srcSet={pfLogoDark} />
        <source media="(min-width: 992px)" srcSet={pfLogoDark} />
        <source media="(min-width: 768px)" srcSet={pfLogoDark} />
        <source media="(min-width: 576px)" srcSet={pfLogoSmDark} />
        <source media="(min-width: 320px)" srcSet={pfLogoSmDark} />
        <source srcSet={pfLogoDark} />
      </Brand>
    </div>
  </>
);
