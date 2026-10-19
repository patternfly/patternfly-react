import { Timestamp } from '@rh-felt/react-core';

export const TimestampDefault: React.FunctionComponent = () => (
  <>
    <Timestamp />
    <br />
    <Timestamp shouldDisplayUTC />
  </>
);
