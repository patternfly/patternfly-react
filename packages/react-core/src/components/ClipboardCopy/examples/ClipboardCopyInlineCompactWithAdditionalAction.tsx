import { useState } from 'react';
import { ClipboardCopy, ClipboardCopyAction, Button, Tooltip } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

export const ClipboardCopyInlineCompactWithAdditionalAction: React.FunctionComponent = () => {
  const [isRunning, setisRunning] = useState(false);
  const runText: string = 'Run in web terminal';
  const doneRunText: string = 'Running in web terminal';
  return (
    <ClipboardCopy
      hoverTip="Copy"
      clickTip="Copied"
      variant="inline-compact"
      additionalActions={
        <ClipboardCopyAction>
          <Tooltip
            aria="none"
            aria-live="polite"
            content={isRunning ? doneRunText : runText}
            onTooltipHidden={() => setisRunning(false)}
          >
            <Button
              variant="plain"
              hasNoPadding
              aria-label="Run in web terminal"
              icon={<PlayIcon />}
              onClick={() => setisRunning(!isRunning)}
            />
          </Tooltip>
        </ClipboardCopyAction>
      }
    >
      2.3.4-2-redhat
    </ClipboardCopy>
  );
};
