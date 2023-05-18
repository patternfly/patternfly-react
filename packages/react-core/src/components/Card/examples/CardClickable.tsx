import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';

export const CardClickable: React.FunctionComponent = () => {
  const id1 = 'clickable-card-input-1';
  const id2 = 'clickable-card-input-2';
  const id3 = 'clickable-card-input-3';

  return (
    <React.Fragment>
      <Card id="clickable-card-example-1" isClickable>
        <CardHeader
          selectableActions={{
            // eslint-disable-next-line no-console
            onClickAction: () => console.log(`${id1} clicked`),
            selectableActionId: id1,
            selectableActionAriaLabelledby: 'clickable-card-example-1',
            name: 'clickable-card-example'
          }}
        >
          <CardTitle>First card</CardTitle>
        </CardHeader>
        <CardBody>This card performs an action on click.</CardBody>
      </Card>
      <Card id="clickable-card-example-2" isClickable>
        <CardHeader
          selectableActions={{
            to: '#',
            selectableActionId: id2,
            selectableActionAriaLabelledby: 'clickable-card-example-2',
            name: 'clickable-card-example'
          }}
        >
          <CardTitle>Second card</CardTitle>
        </CardHeader>
        <CardBody>This card can navigate to a link on click.</CardBody>
      </Card>
      <Card id="clickable-card-example-3" isClickable isDisabled>
        <CardHeader
          selectableActions={{
            // eslint-disable-next-line no-console
            onClickAction: () => console.log(`${id3} clicked`),
            selectableActionId: id3,
            selectableActionAriaLabelledby: 'clickable-card-example-3',
            name: 'clickable-card-example'
          }}
        >
          <CardTitle>Third card</CardTitle>
        </CardHeader>
        <CardBody>This card is clickable but disabled.</CardBody>
      </Card>
    </React.Fragment>
  );
};
