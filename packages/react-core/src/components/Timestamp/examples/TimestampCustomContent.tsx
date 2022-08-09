import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampCustomContent: React.FunctionComponent = () => (
  <>
    <Timestamp datetime="2022-08-09T14:57:00">1 hour ago</Timestamp>
    <br />
    <br />
    <Timestamp datetime="2022-08-09T14:57:00">Last updated August 9th, 2022 at 2:57 PM EDT</Timestamp>
  </>
);
