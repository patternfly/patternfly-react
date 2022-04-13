import React from 'react';
import { Divider } from '@patternfly/react-core';

export const DividerInsetMedium: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Divider inset={{ default: 'insetMd' }} />
);
