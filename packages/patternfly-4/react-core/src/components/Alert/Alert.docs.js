import { Alert, AlertVariant, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';
import SuccessExample from './examples/SuccessAlert';
import DangerExample from './examples/DangerAlert';
import InfoExample from './examples/InfoAlert';
import WarningExample from './examples/WarningAlert';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Alert',
  components: {
    Alert,
    AlertActionCloseButton,
    AlertActionLink
  },
  enumValues: {
    'Object.values(AlertVariant)': Object.values(AlertVariant)
  },
  examples: [
    {
      component: SuccessExample,
      title: 'Success Alert',
      getContainerProps
    },
    {
      component: DangerExample,
      title: 'Danger Alert',
      getContainerProps
    },
    {
      component: WarningExample,
      title: 'Warning Alert',
      getContainerProps
    },
    {
      component: InfoExample,
      title: 'Info Alert',
      getContainerProps
    }
  ]
};
