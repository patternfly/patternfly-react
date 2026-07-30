import { Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import RhMicronsArrowDownIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-arrow-down-icon';
import RhMicronsCaretRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-caret-right-icon';
import RhMicronsCaretDownIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-caret-down-icon';
import RhUiSettingsFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';

export const IconBasic: React.FunctionComponent = () => (
  <Fragment>
    <Icon>
      <RhMicronsArrowDownIcon />
    </Icon>{' '}
    <Icon>
      <RhMicronsCaretRightIcon />
    </Icon>{' '}
    <Icon>
      <RhMicronsCaretDownIcon />
    </Icon>{' '}
    <Icon>
      <RhUiSettingsFillIcon />
    </Icon>
  </Fragment>
);
