import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

export const HelperTextBasic: React.FunctionComponent = () => (
  <React.Fragment>
    <HelperText>
      <HelperTextItem>This is default helper text</HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem status="indeterminate">This is indeterminate helper text</HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem status="warning">This is warning helper text</HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem status="success">This is success helper text</HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem status="error">This is error helper text</HelperTextItem>
    </HelperText>
  </React.Fragment>
);
