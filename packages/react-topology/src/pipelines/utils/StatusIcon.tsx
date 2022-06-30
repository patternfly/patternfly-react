import * as React from 'react';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import CircleIcon from '@patternfly/react-icons/dist/esm/icons/circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import NotStartedIcon from '@patternfly/react-icons/dist/esm/icons/not-started-icon';
import HourglassHalfIcon from '@patternfly/react-icons/dist/esm/icons/hourglass-half-icon';
import SyncAltIcon from '@patternfly/react-icons/dist/esm/icons/sync-alt-icon';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import { RunStatus } from '../types';

interface StatusIconProps {
  className?: string;
  status: RunStatus;
  height?: number;
  width?: number;
}

const StatusIcon: React.FC<StatusIconProps> = ({ status, ...props }) => {
  switch (status) {
    case RunStatus.InProgress:
      return <InProgressIcon {...props} />;

    case RunStatus.Running:
      return <SyncAltIcon {...props} />;

    case RunStatus.Succeeded:
      return <CheckCircleIcon {...props} />;

    case RunStatus.Failed:
    case RunStatus.FailedToStart:
      return <ExclamationCircleIcon {...props} />;

    case RunStatus.Idle:
      return <NotStartedIcon {...props} />;

    case RunStatus.Pending:
      return <HourglassHalfIcon {...props} />;

    case RunStatus.Cancelled:
      return <ExclamationTriangleIcon {...props} />;

    case RunStatus.Skipped:
      return <AngleDoubleRightIcon {...props} />;

    default:
      return <CircleIcon {...props} />;
  }
};

export default StatusIcon;
