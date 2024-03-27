import { FunctionComponent, Fragment } from 'react';
import { Button } from '@patternfly/react-core';

export const ButtonTypes: FunctionComponent = () => (
  <Fragment>
    <Button type="submit">Submit</Button> <Button type="reset">Reset</Button> <Button>Default</Button>
  </Fragment>
);
