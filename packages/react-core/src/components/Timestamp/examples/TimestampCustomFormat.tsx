import { Timestamp } from '@rh-felt/react-core';

export const TimestampCustomFormat: React.FunctionComponent = () => (
  <Timestamp customFormat={{ year: '2-digit', month: 'short', weekday: 'short', day: 'numeric', hour: 'numeric' }} />
);
