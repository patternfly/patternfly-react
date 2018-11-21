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
  examples: [
    { component: Headings, title: 'Headings Example' },
    { component: BodyText, title: 'Body text examples' },
    {
      component: UnorderedList,
      title: 'Unordered list example',
      description: 'Text components such as Text, TextList, TextListItem need to be placed within a TextContent'
    },
    { component: OrderedList, title: 'Ordered list Example' },
    { component: DataList, title: 'Data list example' }
  ]
};
