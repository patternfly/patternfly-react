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
  examples: [VariantsExample, BlockExample, LinkExample]
};
