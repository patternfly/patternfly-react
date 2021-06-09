import { HelperText, HelperTextItem } from '@patternfly/react-core';
import React from 'react';
import InfoIcon from '@patternfly/react-icons/dist/js/icons/info-icon';
import QuestionIcon from '@patternfly/react-icons/dist/js/icons/question-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

export class HelperTextDemo extends React.Component {
  static displayName = 'HelperTextDemo';

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <HelperText id="default-container">
          <HelperTextItem id="default" icon={<InfoIcon />}>
            This is default helper text
          </HelperTextItem>
        </HelperText>
        <HelperText>
          <HelperTextItem id="warning" variant="warning" icon={<ExclamationTriangleIcon />}>
            This is warning helper text
          </HelperTextItem>
        </HelperText>
        <HelperText>
          <HelperTextItem id="success" isDynamic variant="success" icon={<CheckCircleIcon />}>
            This is success helper text
          </HelperTextItem>
          <HelperTextItem id="invalid" isDynamic variant="invalid" icon={<ExclamationCircleIcon />}>
            This is invalid helper text
          </HelperTextItem>
          <HelperTextItem id="indeterminate" isDynamic variant="indeterminate" icon={<QuestionIcon />}>
            This is indeterminate helper text
          </HelperTextItem>
        </HelperText>
      </React.Fragment>
    );
  }
}
