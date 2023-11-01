import { Chip } from '@patternfly/react-core';
import React from 'react';

export const ChipDemo: React.FunctionComponent = () => (
  <>
    <Chip tooltipPosition="bottom" id="longName-chip">
      Chip with a really, really, REALLY long text
    </Chip>
    ;
  </>
);
ChipDemo.displayName = 'ChipDemo';
