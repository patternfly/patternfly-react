import { FunctionComponent } from 'react';
import { Divider } from '@patternfly/react-core';

export const DividerInsetVariousBreakpoints: FunctionComponent = () => (
  <Divider
    inset={{
      default: 'insetMd',
      md: 'insetNone',
      lg: 'inset3xl',
      xl: 'insetLg'
    }}
  />
);
