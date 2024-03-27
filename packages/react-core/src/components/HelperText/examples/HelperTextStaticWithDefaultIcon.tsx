import { FunctionComponent, Fragment } from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

export const HelperTextStaticWithDefaultIcon: FunctionComponent = () => (
  <Fragment>
    <HelperText>
      <HelperTextItem hasIcon>This is default helper text</HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="indeterminate" hasIcon>
        This is indeterminate helper text
      </HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="warning" hasIcon>
        This is warning helper text
      </HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="success" hasIcon>
        This is success helper text
      </HelperTextItem>
    </HelperText>
    <HelperText>
      <HelperTextItem variant="error" hasIcon>
        This is error helper text
      </HelperTextItem>
    </HelperText>
  </Fragment>
);
