import figma from '@figma/code-connect';
import { Brand } from '@patternfly/react-core';

figma.connect(
  Brand,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-3644',
  {
    example: () => (
      // Documentation for Brand can be found at https://www.patternfly.org/components/brand
      <Brand src={`pfLogo`} alt="Patternfly" widths={{ default: '40px', sm: '60px', md: '220px' }}>
        <source media="(min-width: 1200px)" srcSet={`pfLogo`} />
        <source media="(min-width: 992px)" srcSet={`pfLogo`} />
        <source media="(min-width: 768px)" srcSet={`pfLogo`} />
        <source media="(min-width: 576px)" srcSet={`pfLogo`} />
        <source media="(min-width: 320px)" srcSet={`pfLogo`} />
        <source srcSet={`pfLogo`} />
      </Brand>
    )
  }
);
