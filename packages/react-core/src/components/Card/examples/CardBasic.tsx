import { Card, CardTitle, CardSubtitle, CardBody, CardFooter } from '@patternfly/react-core';

export const CardBasic: React.FunctionComponent = () => (
  <Card ouiaId="BasicCard">
    <CardTitle>
      Title
      <CardSubtitle>Subtitle</CardSubtitle>
    </CardTitle>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
