import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';

export const SingleSelectableCard: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState('');
  const id1 = 'single-selectable-card-input-1';
  const id2 = 'single-selectable-card-input-2';
  const id3 = 'single-selectable-card-input-3';

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.id);
  };

  return (
    <React.Fragment>
      <Card id="single-selectable-card-example-1" isSelectable isSelected={isChecked === id1}>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabelledby: 'single-selectable-card-example-1',
            name: 'single-selectable-card-example',
            variant: 'single',
            onChange
          }}
        >
          <CardTitle>First card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card id="single-selectable-card-example-2" isSelectable isSelected={isChecked === id2}>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabelledby: 'single-selectable-card-example-2',
            name: 'single-selectable-card-example',
            variant: 'single',
            onChange
          }}
        >
          <CardTitle>Second card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card id="single-selectable-card-example-3" isSelectable isDisabled isSelected={isChecked === id3}>
        <CardHeader
          selectableActions={{
            selectableActionId: id3,
            selectableActionAriaLabelledby: 'single-selectable-card-example-3',
            name: 'single-selectable-card-example',
            variant: 'single',
            onChange
          }}
        >
          <CardTitle>Third card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable but disabled.</CardBody>
      </Card>
    </React.Fragment>
  );
};
