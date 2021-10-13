import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';

export class LabelGroupCompactDemo {
  render() {
    return (
      <LabelGroup isCompact>
        <Label>One</Label>
        <Label>Two</Label>
        <Label>Three</Label>
        <Label>Four</Label>
      </LabelGroup>
    );
  }
}
