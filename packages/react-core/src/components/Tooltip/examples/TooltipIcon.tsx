import { useState } from 'react';
import { Tooltip, Button } from '@patternfly/react-core';
import RhUiCopyFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-copy-fill-icon';

export const TooltipIcon: React.FunctionComponent = () => {
  const [showSuccessContent, setShowSuccessContent] = useState(false);
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
          icon={<RhUiCopyFillIcon />}
        />
      </Tooltip>
    </div>
  );
};
