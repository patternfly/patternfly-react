import React from 'react';
import { Divider } from '@patternfly/react-core';

export const DividerInsetVariousBreakpoints: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Divider
    inset={{
      default: 'insetMd',
      md: 'insetNone',
      lg: 'inset3xl',
      xl: 'insetLg'
    }}
  />
);
