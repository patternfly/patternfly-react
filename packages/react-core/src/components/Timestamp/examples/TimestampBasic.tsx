import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampBasic: React.FunctionComponent = () => <Timestamp datetime={new Date().toISOString()} />;
