import { FunctionComponent } from 'react';
import { Progress, ProgressSize } from '@patternfly/react-core';

export const ProgressLarge: FunctionComponent = () => <Progress value={33} title="Title" size={ProgressSize.lg} />;
