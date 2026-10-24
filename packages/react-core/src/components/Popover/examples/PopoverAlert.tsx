import { useState } from 'react';
import { Popover, Button } from '@patternfly/react-core';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';

export const AlertPopover: React.FunctionComponent = () => {
  const [alertSeverityVariant, setAlertSeverityVariant] = useState('default');

  const alertIcons = {
    custom: <RhUiNotificationFillIcon />,
    info: <RhUiInformationFillIcon />,
    success: <RhUiCheckCircleFillIcon />,
    warning: <RhUiWarningFillIcon />,
    danger: <RhUiErrorFillIcon />
  };

  return (
    <>
      <div>
        <span style={{ paddingRight: '10px' }}>Alert variant:</span>
        <select aria-label="Popover alert type" onChange={(event) => setAlertSeverityVariant(event.target.value)}>
          <option value="custom">custom</option>
          <option value="info">info</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="danger">danger</option>
        </select>
      </div>
      <div style={{ margin: '50px' }}>
        <Popover
          aria-label="Alert popover"
          alertSeverityVariant={alertSeverityVariant as 'custom' | 'info' | 'warning' | 'success' | 'danger'}
          headerContent="Default popover title"
          headerIcon={alertIcons[alertSeverityVariant]}
          headerComponent="h1"
          bodyContent={<div>Popovers are triggered by click rather than hover.</div>}
          footerContent="Popover footer"
          appendTo={() => document.body}
        >
          <Button>Toggle popover</Button>
        </Popover>
      </div>
    </>
  );
};
