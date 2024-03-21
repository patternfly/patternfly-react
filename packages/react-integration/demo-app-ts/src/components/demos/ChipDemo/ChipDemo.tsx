import { Chip } from '@patternfly/react-core';
import { FunctionComponent } from 'react';

export const ChipDemo: FunctionComponent = () => (
  <>
    <Chip tooltipPosition="bottom" id="longName-chip">
      Chip with a really, really, REALLY long text
    </Chip>
    ;
  </>
);
ChipDemo.displayName = 'ChipDemo';
