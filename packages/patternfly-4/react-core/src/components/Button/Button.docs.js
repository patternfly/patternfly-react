import { Button, ButtonVariant, ButtonType } from '@patternfly/react-core';
import VariantsExample from './examples/ButtonVariants';
import BlockExample from './examples/BlockButton';
import LinkExample from './examples/LinkButton';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Button',
  components: {
    Button
  },
  enumValues: {
    'Object.values(ButtonVariant)': Object.values(ButtonVariant),
    'Object.values(ButtonType)': Object.values(ButtonType)
  },
  examples: [
    { component: VariantsExample, getContainerProps, title: 'Button Variants' },
    { component: BlockExample, title: 'Block Button' },
    {
      component: LinkExample,
      getContainerProps,
      title: 'Links',
      description: `Links with button styling. Semantic buttons and links are important for usability as well as accessibility. Using an "a" instead of a "button" element to perform user initiated actions should be avoided, unless absolutely necessary.`
    }
  ]
};
