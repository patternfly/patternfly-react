import { Fragment } from 'react';
import { MenuToggle, HelperText, HelperTextItem } from '@patternfly/react-core';

export const MenuToggleStatus: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle aria-haspopup={false} status="success">
      Success
    </MenuToggle>
    <br />
    <br />
    <MenuToggle aria-haspopup={false} status="warning">
      Warning
    </MenuToggle>
    <HelperText>
      <HelperTextItem variant="warning">Warning text that explains the issue.</HelperTextItem>
    </HelperText>
    <br />
    <br />
    <MenuToggle aria-haspopup={false} status="danger">
      Danger
    </MenuToggle>
    <HelperText>
      <HelperTextItem variant="error">Danger text that explains the issue.</HelperTextItem>
    </HelperText>
  </Fragment>
);
