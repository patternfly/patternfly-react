import { Fragment } from 'react';
import { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';

export const AlertInlineVariations: React.FunctionComponent = () => (
  <Fragment>
    <Alert
      isInline
      variant="success"
      title="Success alert title"
      actionLinks={
        <Fragment>
          <AlertActionLink component="a" href="#">
            View details
          </AlertActionLink>
          <AlertActionLink // eslint-disable-next-line no-console
            onClick={() => console.log('Clicked on Ignore')}
          >
            Ignore
          </AlertActionLink>
        </Fragment>
      }
    >
      <p>Success alert description. This should tell the user more information about the alert.</p>
    </Alert>
    <Alert isInline variant="success" title="Success alert title">
      <p>
        Success alert description. This should tell the user more information about the alert.{' '}
        <a href="#">This is a link.</a>
      </p>
    </Alert>
    <Alert
      isInline
      variant="success"
      title="Success alert title"
      // eslint-disable-next-line no-console
      actionClose={<AlertActionCloseButton onClose={() => console.log('Clicked the close button')} />}
    >
      <p>Short alert description.</p>
    </Alert>
    <Alert isInline variant="success" title="div success alert title" component="div" />
    <Alert isInline variant="success" title="h6 Success alert title" component="h6">
      <p>Short alert description.</p>
    </Alert>
  </Fragment>
);
