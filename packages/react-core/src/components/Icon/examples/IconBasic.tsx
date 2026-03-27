import { Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import RhMicronsCaretRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-caret-right-icon';
import RhMicronsCaretDownIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-caret-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

export const IconBasic: React.FunctionComponent = () => (
  <Fragment>
    <Icon>
      <LongArrowAltDownIcon />
    </Icon>{' '}
    <Icon>
      <RhMicronsCaretRightIcon />
    </Icon>{' '}
    <Icon>
      <RhMicronsCaretDownIcon />
    </Icon>{' '}
    <Icon>
      <CogIcon />
    </Icon>
  </Fragment>
);
