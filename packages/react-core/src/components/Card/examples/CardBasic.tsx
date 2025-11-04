import { Card, CardTitle, CardSubtitle, CardBody, CardFooter } from '@patternfly/react-core';

export const CardBasic: React.FunctionComponent = () => (
  <Card ouiaId="BasicCard">
    <CardTitle>Title</CardTitle>
    <CardSubtitle>Subtitle</CardSubtitle>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
