import { Button } from '@patternfly/react-core';

export const ButtonCustomComponent: React.FunctionComponent = () => (
  <Button variant="link" component={(props: any) => <a {...props} href="#" />}>
    Router link
  </Button>
);
