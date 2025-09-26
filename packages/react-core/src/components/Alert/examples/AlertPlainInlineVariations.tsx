import { Alert } from '@patternfly/react-core';

export const AlertPlainInlineVariations: React.FunctionComponent = () => (
  <Alert isInline isPlain variant="success" title="Success alert title">
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </Alert>
);
