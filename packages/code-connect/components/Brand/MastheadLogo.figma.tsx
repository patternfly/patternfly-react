import figma from '@figma/code-connect';
import { Brand } from '@patternfly/react-core';

// Documentation for Brand can be found at https://www.patternfly.org/components/brand

figma.connect(
  Brand,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-3644',
  {
    example: () => (
      <Brand src="<path-to-logo>" alt="Patternfly" widths={{ default: '40px', sm: '60px', md: '220px' }}>
        <source media="(min-width: 1200px)" srcSet="<path-to-logo>" />
        <source media="(min-width: 992px)" srcSet="<path-to-logo>" />
        <source media="(min-width: 768px)" srcSet="<path-to-logo>" />
        <source media="(min-width: 576px)" srcSet="<path-to-logo>" />
        <source media="(min-width: 320px)" srcSet="<path-to-logo>" />
        <source srcSet="<path-to-logo>" />
      </Brand>
    )
  }
);
