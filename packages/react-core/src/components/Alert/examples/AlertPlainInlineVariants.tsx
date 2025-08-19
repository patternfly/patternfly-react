import { Fragment } from 'react';
import { Alert } from '@patternfly/react-core';

export const AlertPlainInlineVariants: React.FunctionComponent = () => (
  <Fragment>
    <Alert variant="custom" isInline isPlain title="Custom inline alert title" />
    <Alert variant="info" isInline isPlain title="Info inline alert title" />
    <Alert variant="success" isInline isPlain title="Success inline alert title" />
    <Alert variant="warning" isInline isPlain title="Warning inline alert title" />
    <Alert variant="danger" isInline isPlain title="Danger inline alert title" />
  </Fragment>
);
