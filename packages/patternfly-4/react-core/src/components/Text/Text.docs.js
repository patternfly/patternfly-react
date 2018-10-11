import {
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants
} from '@patternfly/react-core';
import BodyText from './examples/BodyText';
import DataList from './examples/DataList';
import Headings from './examples/Headings';
import OrderedList from './examples/OrderedList';
import UnorderedList from './examples/UnorderedList';

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
  examples: [Headings, BodyText, UnorderedList, OrderedList, DataList]
};
