import { Fragment } from 'react';
import { Button } from '@patternfly/react-core';

export const OuiaExample: React.FunctionComponent = () => (
  <Fragment>
    <Button>Button</Button>
    <br />
    <br />
    <Button ouiaId="static_id">Button with ouiaId</Button>
  </Fragment>
);
