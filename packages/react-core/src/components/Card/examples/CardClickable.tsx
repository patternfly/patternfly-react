import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, Checkbox, Gallery } from '@patternfly/react-core';

export const CardClickable: React.FunctionComponent = () => {
  const [isSecondary, setIsSecondary] = React.useState<boolean>(false);

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
          <Card isClickable variant={isSecondary ? 'secondary' : 'default'}>
            <CardHeader
              selectableActions={{
                // eslint-disable-next-line no-console
                onClickAction: () => console.log(`First card in actionable example clicked`),
                selectableActionAriaLabelledby: 'clickable-card-example-title-1'
              }}
            >
              <CardTitle id="clickable-card-example-title-1">First card in the actionable example</CardTitle>
            </CardHeader>
            <CardBody>This card performs an action on click.</CardBody>
          </Card>
          <Card isClickable variant={isSecondary ? 'secondary' : 'default'}>
            <CardHeader
              selectableActions={{
                to: '#',
                selectableActionAriaLabelledby: 'clickable-card-example-title-2'
              }}
            >
              <CardTitle id="clickable-card-example-title-2">Second card in the actionable example</CardTitle>
            </CardHeader>
            <CardBody>This card can navigate to a link on click.</CardBody>
          </Card>
          <Card isClickable isDisabled variant={isSecondary ? 'secondary' : 'default'}>
            <CardHeader
              selectableActions={{
                // eslint-disable-next-line no-console
                onClickAction: () => console.log(`Third card in actionable example clicked`),
                selectableActionAriaLabelledby: 'clickable-card-example-title-3'
              }}
            >
              <CardTitle id="clickable-card-example-title-3">Third card in the actionable example</CardTitle>
            </CardHeader>
            <CardBody>This card is clickable but disabled.</CardBody>
          </Card>
        </Gallery>
      </div>
    </>
  );
};
