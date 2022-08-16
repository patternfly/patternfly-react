import React from 'react';
import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Progress,
  ProgressMeasureLocation
} from '@patternfly/react-core';

export const ProgressTitleOutsideOfProgressBar: React.FunctionComponent = () => (
  <DescriptionList>
    <DescriptionListGroup>
      <DescriptionListTerm id="progress-label">Title outside of progress bar</DescriptionListTerm>
      <DescriptionListDescription>
        <Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-labelledby="progress-label" />
      </DescriptionListDescription>
    </DescriptionListGroup>
  </DescriptionList>
);
