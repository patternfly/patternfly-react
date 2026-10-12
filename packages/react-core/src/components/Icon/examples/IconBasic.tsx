import { Fragment } from 'react';
import { Icon } from '@rh-felt/react-core';
import RhMicronsArrowDownIcon from '@rh-felt/react-icons/dist/esm/icons/rh-microns-arrow-down-icon';
import RhMicronsCaretRightIcon from '@rh-felt/react-icons/dist/esm/icons/rh-microns-caret-right-icon';
import RhMicronsCaretDownIcon from '@rh-felt/react-icons/dist/esm/icons/rh-microns-caret-down-icon';
import RhUiSettingsFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';

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
