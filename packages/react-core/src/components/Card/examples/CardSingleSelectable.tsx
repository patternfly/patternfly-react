import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Gallery, Checkbox } from '@patternfly/react-core';

export const SingleSelectableCard: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState('');
  const id1 = 'single-selectable-card-input-1';
  const id2 = 'single-selectable-card-input-2';
  const id3 = 'single-selectable-card-input-3';
  const [displayRadioButton, setDisplayRadioButton] = useState(false);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.id);
  };

  const toggleHide = (checked: boolean) => {
    setDisplayRadioButton(checked);
  };

  return (
    <>
      <Checkbox
        label="Hide radio button"
        isChecked={displayRadioButton}
        onChange={(_event, checked) => toggleHide(checked)}
        id="single-select-toggle-hide-radio-button"
        name="toggle-hide"
      />
      <Gallery hasGutter style={{ marginTop: '15px' }}>
        <Card id="single-selectable-card-example-1" isSelectable isSelected={isChecked === id1}>
          <CardHeader
            selectableActions={{
              selectableActionId: id1,
              selectableActionAriaLabelledby: 'single-selectable-card-example-1',
              name: 'single-selectable-card-example',
              variant: 'single',
              onChange,
              hasNoOffset: true,
              isHidden: displayRadioButton
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
              onChange,
              hasNoOffset: true,
              isHidden: displayRadioButton
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
              onChange,
              hasNoOffset: true,
              isHidden: displayRadioButton
            }}
          >
            <CardTitle>Third card</CardTitle>
          </CardHeader>
          <CardBody>This card is single selectable but disabled.</CardBody>
        </Card>
      </Gallery>
    </>
  );
};
