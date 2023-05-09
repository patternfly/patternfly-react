import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';

export const SelectableCard: React.FunctionComponent = () => {
  const id1 = 'selectable-card-1';
  const id2 = 'selectable-card-2';
  const id3 = 'selectable-card-3';

  return (
    <React.Fragment>
      <Card id="selectable-first-card" isSelectable>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabel: id1,
            name: 'selectable-cards'
          }}
        />
        <CardTitle>First card</CardTitle>
        <CardBody>This card is selectable.</CardBody>
      </Card>
      <Card id="selectable-second-card" isSelectable>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabel: id2,
            name: 'selectable-cards'
          }}
        />
        <CardTitle>Second card</CardTitle>
        <CardBody>This card is selectable.</CardBody>
      </Card>
      <Card id="selectable-third-card" isSelectable>
        <CardHeader
          selectableActions={{
            isDisabled: true,
            selectableActionId: id3,
            selectableActionAriaLabel: id3,
            name: 'selectable-cards'
          }}
        />
        <CardTitle>Third card</CardTitle>
        <CardBody>This card is selectable but disabled.</CardBody>
      </Card>
    </React.Fragment>
  );
};
