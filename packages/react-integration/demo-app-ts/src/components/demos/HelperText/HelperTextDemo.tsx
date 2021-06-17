import { HelperText, HelperTextItem } from '@patternfly/react-core';
import React from 'react';
import InfoIcon from '@patternfly/react-icons/dist/js/icons/info-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';

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
          <HelperTextItem id="error" isDynamic variant="error">
            This is error helper text
          </HelperTextItem>
          <HelperTextItem id="indeterminate" isDynamic variant="indeterminate">
            This is indeterminate helper text
          </HelperTextItem>
        </HelperText>
        <HelperText id="list-container" component="ul">
          <HelperTextItem id="list1" isDynamic variant="success" component="li" hasIcon={false}>
            This is a list item
          </HelperTextItem>
          <HelperTextItem id="list2" isDynamic variant="error" component="li">
            This is a list item
          </HelperTextItem>
          <HelperTextItem id="list3" isDynamic variant="indeterminate" component="li">
            This is a list item
          </HelperTextItem>
        </HelperText>
      </React.Fragment>
    );
  }
}
