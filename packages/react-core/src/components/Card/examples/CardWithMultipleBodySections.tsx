import { Card, CardTitle, CardBody, CardFooter } from '@rh-felt/react-core';

export const CardWithMultipleBodySections: React.FunctionComponent = () => (
  <Card>
    <CardTitle>Title</CardTitle>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
