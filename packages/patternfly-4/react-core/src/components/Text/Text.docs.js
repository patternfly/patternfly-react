import {
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants
} from '@patternfly/react-core';
import SimpleText from './examples/SimpleText';

export default {
  title: 'Text',
  components: {
    TextContent,
    Text,
    TextList,
    TextListItem
  },
  enumValues: {
    'Object.values(TextVariants)': Object.values(TextVariants),
    'Object.values(TextListVariants)': Object.values(TextListVariants),
    'Object.values(TextListItemVariants)': Object.values(TextListItemVariants)
  },
  examples: [SimpleText]
};
