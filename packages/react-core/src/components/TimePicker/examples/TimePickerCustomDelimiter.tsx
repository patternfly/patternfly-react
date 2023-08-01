import React from 'react';
import { TimePicker } from '@patternfly/react-core';

export const CustomDelimiter: React.FunctionComponent = () => <TimePicker is24Hour delimiter="h" placeholder="" />;
