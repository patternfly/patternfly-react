import { Card, CardBody, CardHeader, Button, CardTitle, Flex, FlexItem } from '@patternfly/react-core';

export const CardBasic: React.FunctionComponent = () => (
  <Card ouiaId="BasicCard">
    <CardHeader hasWrap>
      {' '}
      <Flex columnGap={{ default: 'columnGapXl' }} justifyContent={{ default: 'justifyContentSpaceBetween' }}>
        <FlexItem>
          <CardTitle>This is a longer card title that takes up more space</CardTitle>
        </FlexItem>
        <FlexItem>
          <Button variant="primary" ouiaId="Primary">
            Primary action
          </Button>
          <Button variant="secondary" ouiaId="Secondary">
            Secondary action
          </Button>
          <Button variant="tertiary" ouiaId="Tertiary">
            Tertiary action
          </Button>
        </FlexItem>
      </Flex>
    </CardHeader>
    <CardBody>This is the card body</CardBody>
  </Card>
);
