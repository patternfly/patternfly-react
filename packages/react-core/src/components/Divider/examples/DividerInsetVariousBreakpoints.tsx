import { Divider } from '@rh-felt/react-core';

export const DividerInsetVariousBreakpoints: React.FunctionComponent = () => (
  <Divider
    inset={{
      default: 'insetMd',
      md: 'insetNone',
      lg: 'inset3xl',
      xl: 'insetLg'
    }}
  />
);
