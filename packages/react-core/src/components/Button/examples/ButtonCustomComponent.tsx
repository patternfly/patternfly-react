import { Button } from '@rh-felt/react-core';

export const ButtonCustomComponent: React.FunctionComponent = () => (
  <Button variant="link" component={(props: any) => <a {...props} href="#" />}>
    Router link
  </Button>
);
