import { Fragment } from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

export const AlertStaticLiveRegion: React.FunctionComponent = () => (
  <Fragment>
    <Alert
      isLiveRegion
      variant="info"
      title="Default live region configuration"
      // eslint-disable-next-line no-console
      actionClose={<AlertActionCloseButton onClose={() => console.log('Clicked the close button')} />}
    >
      This alert uses the recommended <code>isLiveRegion</code> prop to automatically set ARIA attributes and CSS
      classes.
    </Alert>
    <Alert
      aria-live="assertive"
      aria-relevant="additions text"
      aria-atomic="true"
      variant="info"
      title="Customized live region"
      // eslint-disable-next-line no-console
      actionClose={<AlertActionCloseButton onClose={() => console.log('Clicked the close button')} />}
    >
      You can alternatively omit the <code>isLiveRegion</code> prop to specify ARIA attributes and CSS manually on the
      containing element.
    </Alert>
  </Fragment>
);
