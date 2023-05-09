import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';

export const CardClickable: React.FunctionComponent = () => {
  const id1 = 'clickable-card-1';
  const id2 = 'clickable-card-2';
  const id3 = 'clickable-card-3';

  return (
    <React.Fragment>
      <Card id="clickable-first-card" isClickable>
        <CardHeader
          selectableActions={{
            // eslint-disable-next-line no-console
            onClickAction: () => console.log(id1),
            selectableActionId: id1,
            selectableActionAriaLabel: id1,
            name: 'clickable-cards'
          }}
        />
        <CardTitle>First card</CardTitle>
        <CardBody>This card performs an action on click.</CardBody>
      </Card>
      <Card id="clickable-second-card" isClickable>
        <CardHeader
          selectableActions={{
            to: 'https://www.patternfly.org/',
            selectableActionId: id2,
            selectableActionAriaLabel: id2,
            name: 'clickable-cards'
          }}
        />
        <CardTitle>Second card</CardTitle>
        <CardBody>This card navigates to a link on click.</CardBody>
      </Card>
      <Card id="clickable-third-card" isClickable>
        <CardHeader
          selectableActions={{
            isDisabled: true,
            selectableActionId: id3,
            selectableActionAriaLabel: id3,
            name: 'clickable-cards'
          }}
        />
        <CardTitle>Third card</CardTitle>
        <CardBody>This card is clickable but disabled.</CardBody>
      </Card>
    </React.Fragment>
  );
};
