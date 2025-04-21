import { Truncate } from '@patternfly/react-core';

export const TruncateStart: React.FunctionComponent = () => (
  <div className="truncate-example-resize">
    <Truncate content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'} position={'start'} />
  </div>
);
