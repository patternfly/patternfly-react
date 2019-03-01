import { Button, ButtonVariant, ButtonType } from '@patternfly/react-core';
import VariantsExample from './examples/ButtonVariants';
import BlockExample from './examples/BlockButton';
import LinkExample from './examples/LinkButton';

export default {
  title: 'Button',
  components: {
    Button
  },
  enumValues: {
    'Object.values(ButtonVariant)': Object.values(ButtonVariant),
    'Object.values(ButtonType)': Object.values(ButtonType)
  },
  variablesRoot: 'pf-c-button',
  examples: [
    { component: VariantsExample, title: 'Button Variants' },
    { component: BlockExample, title: 'Block Button' },
    {
      component: LinkExample,
      title: 'Links'
    }
  ]
};
