import React from 'react';
import { Tooltip, Button } from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';

export const TooltipIcon: React.FunctionComponent = () => {
  const [showSuccessContent, setShowSuccessContent] = React.useState(false);
  const copyText: string = 'Copy to clipboard';
  const doneCopyText: string = 'Successfully copied to clipboard!';

  return (
    <div style={{ margin: '100px' }}>
      <Tooltip aria="none" aria-live="polite" content={showSuccessContent ? doneCopyText : copyText}>
        <Button
          aria-label="Clipboard"
          variant="plain"
          id="tt-ref"
          onClick={() => setShowSuccessContent(!showSuccessContent)}
        >
          <CopyIcon />
        </Button>
      </Tooltip>
    </div>
  );
};
