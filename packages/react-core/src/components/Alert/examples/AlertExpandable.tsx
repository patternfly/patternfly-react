import { Fragment } from 'react';
import { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';

export const AlertExpandable: React.FunctionComponent = () => (
  <Fragment>
    <Alert
      isExpandable
      variant="success"
      title="Success alert title"
      // eslint-disable-next-line no-console
      actionClose={<AlertActionCloseButton onClose={() => console.log('Clicked the close button')} />}
    >
      <p>Success alert description. This should tell the user more information about the alert.</p>
    </Alert>
    <Alert
      isExpandable
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
  </Fragment>
);
