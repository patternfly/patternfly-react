import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';

export const SingleSelectableCard: React.FunctionComponent = () => {
  const id1 = 'single-selectable-card-input-1';
  const id2 = 'single-selectable-card-input-2';
  const id3 = 'single-selectable-card-input-3';

  return (
    <React.Fragment>
      <Card id="single-selectable-card-example-1" isSelectable>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabelledby: 'single-selectable-card-example-1',
            name: 'single-selectable-card-example',
            variant: 'single'
          }}
        >
          <CardTitle>First card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card id="single-selectable-card-example-2" isSelectable>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabelledby: 'single-selectable-card-example-2',
            name: 'single-selectable-card-example',
            variant: 'single'
          }}
        >
          <CardTitle>Second card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card id="single-selectable-card-example-3" isSelectable isDisabled>
        <CardHeader
          selectableActions={{
            selectableActionId: id3,
            selectableActionAriaLabelledby: 'single-selectable-card-example-3',
            name: 'single-selectable-card-example',
            variant: 'single'
          }}
        >
          <CardTitle>Third card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable but disabled.</CardBody>
      </Card>
    </React.Fragment>
  );
};
