import { Card, CardTitle, CardBody, CardFooter } from '@rh-felt/react-core';

export const CardWithBodySectionFills: React.FunctionComponent = () => (
  <Card style={{ minHeight: '30em' }}>
    <CardTitle>Title</CardTitle>
    <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
    <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
