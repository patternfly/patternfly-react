import React from 'react';
import { Popover, Button } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export const AlertPopover: React.FunctionComponent = () => {
  const [alertSeverityVariant, setAlertSeverityVariant] = React.useState('default');

  const alertIcons = {
    default: <BellIcon />,
    info: <InfoCircleIcon />,
    success: <CheckCircleIcon />,
    warning: <ExclamationTriangleIcon />,
    danger: <ExclamationCircleIcon />
  };

  return (
    <>
      <div>
        <span style={{ paddingRight: '10px' }}>Alert variant:</span>
        <select aria-label="Popover alert type" onChange={event => setAlertSeverityVariant(event.target.value)}>
          <option value="default">default</option>
          <option value="info">info</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="danger">danger</option>
        </select>
      </div>
      <div style={{ margin: '50px' }}>
        <Popover
          aria-label="Alert popover"
          alertSeverityVariant={alertSeverityVariant as 'default' | 'info' | 'warning' | 'success' | 'danger'}
          headerContent="Default popover title"
          headerIcon={alertIcons[alertSeverityVariant]}
          headerComponent="h1"
          bodyContent={<div>Popovers are triggered by click rather than hover.</div>}
          footerContent="Popover footer"
        >
          <Button>Toggle popover</Button>
        </Popover>
      </div>
    </>
  );
};
