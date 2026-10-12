import { Card, CardTitle, CardBody, CardFooter } from '@rh-felt/react-core';

export const CardSecondary: React.FunctionComponent = () => (
  <Card ouiaId="SecondaryCard" variant="secondary">
    <CardTitle>Title</CardTitle>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
