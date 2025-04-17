import { Truncate } from '@patternfly/react-core';

export const TruncateDemo: React.FunctionComponent = () => (
  <>
    <div style={{ width: '100px' }}>
      <Truncate id="basic-truncate" content={'basic truncated content'} />
    </div>
    <div style={{ width: '800px' }}>
      <Truncate id="no-truncate" content={'no truncation in wide container'} />
    </div>
  </>
);
TruncateDemo.displayName = 'TruncateDemo';
