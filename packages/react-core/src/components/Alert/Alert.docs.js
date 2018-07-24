import { Alert, AlertVariant } from '@patternfly/react-core';
import SuccessExample from './examples/SuccessAlert';
import DangerExample from './examples/DangerAlert';
import InfoExample from './examples/InfoAlert';
import WarningExample from './examples/WarningAlert';

export default {
  title: 'Alert',
  components: {
    Alert
  },
  enumValues: {
    'Object.values(AlertVariant)': Object.values(AlertVariant)
  },
  examples: [SuccessExample, DangerExample, InfoExample, WarningExample]
};
