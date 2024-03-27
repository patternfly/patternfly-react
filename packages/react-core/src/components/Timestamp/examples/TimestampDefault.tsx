import { FunctionComponent } from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampDefault: FunctionComponent = () => (
  <>
    <Timestamp />
    <br />
    <Timestamp shouldDisplayUTC />
  </>
);
