import { Fragment } from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';
import InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';
import RhUiQuestionMarkIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-icon';
import ExclamationIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-icon';
import RhMicronsCheckmarkIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-checkmark-icon';
import RhMicronsCloseIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-close-icon';

export const HelperTextWithCustomIcon: React.FunctionComponent = () => (
  <Fragment>
    <HelperText>
      <HelperTextItem icon={<InfoIcon />}>This is default helper text</HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="indeterminate" icon={<RhUiQuestionMarkIcon />}>
        This is indeterminate helper text
      </HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="warning" icon={<ExclamationIcon />}>
        This is warning helper text
      </HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="success" icon={<RhMicronsCheckmarkIcon />}>
        This is success helper text
      </HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="error" icon={<RhMicronsCloseIcon />}>
        This is error helper text
      </HelperTextItem>
    </HelperText>
  </Fragment>
);
