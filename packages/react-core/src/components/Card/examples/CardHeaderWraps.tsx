import { Card, CardBody, CardHeader, Button, CardTitle } from '@patternfly/react-core';

export const CardBasic: React.FunctionComponent = () => (
  <Card ouiaId="BasicCard">
    <CardHeader
      hasWrap
      actions={{
        hasNoOffset: true,
        actions: [
          <Button variant="primary" ouiaId="Primary" key="primary">
            Primary action
          </Button>,
          <Button variant="secondary" ouiaId="Secondary" key="secondary">
            Secondary action
          </Button>,
          <Button variant="tertiary" ouiaId="Tertiary" key="tertiary">
            Tertiary action
          </Button>
        ]
      }}
    >
      <CardTitle>This is a longer card title that takes up more space</CardTitle>
    </CardHeader>
    <CardBody>This is the card body</CardBody>
  </Card>
);
