import { Fragment } from 'react';
import { Alert } from '@patternfly/react-core';

export const AlertInlineVariants: React.FunctionComponent = () => (
  <Fragment>
    <Alert variant="custom" isInline title="Custom inline alert title" />
    <Alert variant="info" isInline title="Info inline alert title" />
    <Alert variant="success" isInline title="Success inline alert title" />
    <Alert variant="warning" isInline title="Warning inline alert title" />
    <Alert variant="danger" isInline title="Danger inline alert title" />
  </Fragment>
);
