import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, Checkbox, Gallery } from '@patternfly/react-core';

export const CardClickable: React.FunctionComponent = () => {
  const [isSecondary, setIsSecondary] = React.useState<boolean>(false);

  const id1 = 'clickable-card-input-1';
  const id2 = 'clickable-card-input-2';
  const id3 = 'clickable-card-input-3';

  const toggleVariant = (checked: boolean) => {
    setIsSecondary(checked);
  };

  return (
    <>
      <Checkbox
        label="secondary styling"
        isChecked={isSecondary}
        onChange={(_event, checked) => toggleVariant(checked)}
        aria-label="add secondary styling"
        id="toggle-variant-clickable"
        name="toggle-variant"
      />
      <div style={{ marginTop: '15px' }}>
        <Gallery hasGutter>
          <Card id="clickable-card-example-1" isClickable variant={isSecondary ? 'secondary' : 'default'}>
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
          <Card id="clickable-card-example-2" isClickable variant={isSecondary ? 'secondary' : 'default'}>
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
          <Card id="clickable-card-example-3" isClickable isDisabled variant={isSecondary ? 'secondary' : 'default'}>
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
        </Gallery>
      </div>
    </>
  );
};
