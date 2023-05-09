import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';

export const SingleSelectableCard: React.FunctionComponent = () => {
  const id1 = 'single-selectable-card-1';
  const id2 = 'single-selectable-card-2';
  const id3 = 'single-selectable-card-3';

  return (
    <React.Fragment>
      <Card id="single-selectable-first-card" isSelectable>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabel: id1,
            name: 'selectable-cards',
            variant: 'single'
          }}
        />
        <CardTitle>First card</CardTitle>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card id="single-selectable-second-card" isSelectable>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabel: id2,

            name: 'selectable-cards',
            variant: 'single'
          }}
        />
        <CardTitle>Second card</CardTitle>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card id="single-selectable-third-card" isSelectable>
        <CardHeader
          selectableActions={{
            isDisabled: true,
            selectableActionId: id3,
            selectableActionAriaLabel: id3,
            name: 'single-selectable-cards',
            variant: 'single'
          }}
        />
        <CardTitle>Third card</CardTitle>
        <CardBody>This card is single selectable but disabled.</CardBody>
      </Card>
    </React.Fragment>
  );
};
