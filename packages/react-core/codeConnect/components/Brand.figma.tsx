import { Brand } from 'src/components/Brand';
import figma from '@figma/code-connect';

// Masthead logo
figma.connect(
  Brand,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2104-3644&m=dev',
  {
    example: () => <Brand alt="Brand" />
  }
);

figma.connect(
  Brand,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2104-3689&m=dev',
  {
    example: () => <Brand alt="Brand" />
  }
);
