import React from 'react';
import { Button } from '@patternfly/react-core';

export const ButtonBlock: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Button isBlock>Block level button</Button>
);
