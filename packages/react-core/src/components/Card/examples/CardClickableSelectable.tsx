import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, Button } from '@patternfly/react-core';

export const CardClickable: React.FunctionComponent = () => {
  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);
  const [isSelected1, setIsSelected1] = React.useState(false);

  const id1 = 'clickable-selectable-card-input-1';
  const id2 = 'clickable-selectable-card-input-2';
  const id3 = 'clickable-selectable-card-input-3';

  const onClick = () => {
    setIsSelected1((prevState) => !prevState);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    const name = event.currentTarget.name;

    switch (name) {
      case id1:
        setIsChecked1(checked);
        break;
      case id2:
        setIsChecked2(checked);
        break;
      case id3:
        setIsChecked3(checked);
        break;
    }
  };

  return (
    <React.Fragment>
      <Card id="clickable-selectable-card-example-1" isClickable isSelectable isSelected={isSelected1}>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabelledby: 'clickable-selectable-card-example-1',
            name: id1,
            isChecked: isChecked1,
            onChange
          }}
        >
          <CardTitle>
            <Button variant="link" isInline onClick={onClick}>
              First card
            </Button>
          </CardTitle>
        </CardHeader>
        <CardBody>This card performs an action upon clicking the card title and is selectable.</CardBody>
      </Card>
      <Card id="clickable-selectable-card-example-2" isClickable isSelectable>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabelledby: 'clickable-selectable-card-example-2',
            name: id2,
            isChecked: isChecked2,
            onChange
          }}
        >
          <CardTitle>Second Card</CardTitle>
        </CardHeader>
        <CardBody>
          This card is selectable and has a link in the card body that navigates to{' '}
          <Button variant="link" isInline component="a" href="#">
            Patternfly
          </Button>
          .
        </CardBody>
      </Card>
      <Card id="clickable-selectable-card-example-3" isClickable isSelectable isDisabled>
        <CardHeader
          selectableActions={{
            selectableActionId: id3,
            selectableActionAriaLabelledby: 'clickable-selectable-card-example-3',
            name: id3,
            isChecked: isChecked3,
            onChange
          }}
        >
          <CardTitle>
            <Button isDisabled variant="link" isInline component="a" href="https://www.patternfly.org/">
              Third card
            </Button>
          </CardTitle>
        </CardHeader>
        <CardBody>This card is clickable and selectable, but disabled.</CardBody>
      </Card>
    </React.Fragment>
  );
};
