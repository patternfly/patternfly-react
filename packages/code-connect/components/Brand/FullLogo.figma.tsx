import figma from '@figma/code-connect';
import { Brand } from '@patternfly/react-core';

figma.connect(
  Brand,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-3689',
  {
    example: () => (
      // Documentation for Brand can be found at https://www.patternfly.org/components/brand
      <Brand src={`pfLogo`} alt="Patternfly" widths={{ default: '200px', md: '400px', xl: '600px' }} />
    )
  }
);
