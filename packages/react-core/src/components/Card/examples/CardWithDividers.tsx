import { Card, CardTitle, CardBody, CardFooter, Divider } from '@rh-felt/react-core';

export const CardWithDividers: React.FunctionComponent = () => (
  <Card ouiaId="CardWithDividers">
    <CardTitle>Title</CardTitle>
    <Divider />
    <CardBody>Body</CardBody>
    <Divider />
    <CardBody>Body</CardBody>
    <Divider />
    <CardFooter>Footer</CardFooter>
  </Card>
);
