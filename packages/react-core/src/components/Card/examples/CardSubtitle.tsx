import { Card, CardTitle, CardBody, CardFooter } from '@rh-felt/react-core';

export const CardSubtitle: React.FunctionComponent = () => (
  <Card ouiaId="CardSubtitle">
    <CardTitle subtitle="Subtitle">Title</CardTitle>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
