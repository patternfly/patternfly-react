import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';

export const CardSelectable: React.FunctionComponent = () => {
  const id1 = 'clickable-card-1';
  const id2 = 'clickable-card-2';

  return (
    <React.Fragment>
      <Card id="selectable-first-card" isClickable>
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
        <CardBody>This is a clickable card.</CardBody>
      </Card>
      <Card id="selectable-first-card" isClickable>
        <CardHeader
          selectableActions={{
            to: 'https://www.patternfly.org/',
            selectableActionId: id2,
            selectableActionAriaLabel: id2,
            name: 'clickable-cards'
          }}
        />
        <CardTitle>First card</CardTitle>
        <CardBody>This is a clickable card.</CardBody>
      </Card>
    </React.Fragment>
  );
};
