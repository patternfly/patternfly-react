import { Label, LabelVariant } from '@patternfly/react-core';
import SimpleLabel from './examples/SimpleLabel';
import CompactLabel from './examples/CompactLabel';

export default {
  title: 'Label',
  components: {
    Label
  },
  enumValues: {
    'Object.values(LabelVariant)': Object.values(LabelVariant)
  },
  examples: [SimpleLabel, CompactLabel]
};
