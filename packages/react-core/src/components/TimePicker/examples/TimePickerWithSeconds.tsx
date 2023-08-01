import React from 'react';
import { TimePicker } from '@patternfly/react-core';

export const WithSeconds: React.FunctionComponent = () => <TimePicker time="3:35:20 PM" includeSeconds />;
