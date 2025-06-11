import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Checkbox, Gallery } from '@patternfly/react-core';

export const SelectableCard: React.FunctionComponent = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isSecondary, setIsSecondary] = useState<boolean>(false);
  const [displayRadioButton, setDisplayRadioButton] = useState<boolean>(false);

  const id1 = 'selectable-card-input-1';
  const id2 = 'selectable-card-input-2';
  const id3 = 'selectable-card-input-3';

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

  const toggleVariant = (checked: boolean) => {
    setIsSecondary(checked);
  };

  const toggleHide = (checked: boolean) => {
    setDisplayRadioButton(checked);
  };

  return (
    <>
      <Checkbox
        label="Secondary card styling"
        isChecked={isSecondary}
        onChange={(_event, checked) => toggleVariant(checked)}
        id="toggle-variant-selectable"
        name="toggle-variant"
      />
      <Checkbox
        label="Hide radio button"
        isChecked={displayRadioButton}
        onChange={(_event, checked) => toggleHide(checked)}
        id="toggle-hide-radio-button"
        name="toggle-hide"
      />
      <Gallery hasGutter style={{ marginTop: '15px' }}>
        <Card
          id="selectable-card-example-1"
          isSelectable
          isSelected={isChecked1}
          variant={isSecondary ? 'secondary' : 'default'}
        >
          <CardHeader
            selectableActions={{
              selectableActionId: id1,
              selectableActionAriaLabelledby: 'selectable-card-example-1',
              name: id1,
              onChange,
              hasNoOffset: true,
              isHidden: displayRadioButton
            }}
          >
            <CardTitle>First card</CardTitle>
          </CardHeader>
          <CardBody>This card is selectable.</CardBody>
        </Card>
        <Card
          id="selectable-card-example-2"
          isSelectable
          isSelected={isChecked2}
          variant={isSecondary ? 'secondary' : 'default'}
        >
          <CardHeader
            selectableActions={{
              selectableActionId: id2,
              selectableActionAriaLabelledby: 'selectable-card-example-2',
              name: id2,
              onChange,
              hasNoOffset: true,
              isHidden: displayRadioButton
            }}
          >
            <CardTitle>Second card</CardTitle>
          </CardHeader>
          <CardBody>This card is selectable.</CardBody>
        </Card>
        <Card
          id="selectable-card-example-3"
          isSelectable
          isDisabled
          isSelected={isChecked3}
          variant={isSecondary ? 'secondary' : 'default'}
        >
          <CardHeader
            selectableActions={{
              selectableActionId: id3,
              selectableActionAriaLabelledby: 'selectable-card-example-3',
              name: id3,
              onChange,
              hasNoOffset: true,
              isHidden: displayRadioButton
            }}
          >
            <CardTitle>Third card</CardTitle>
          </CardHeader>
          <CardBody>This card is selectable but disabled.</CardBody>
        </Card>
      </Gallery>
    </>
  );
};
