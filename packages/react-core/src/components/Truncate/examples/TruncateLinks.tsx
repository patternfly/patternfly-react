import { useRef } from 'react';
import { Truncate, Button } from '@patternfly/react-core';

export const TruncateLinks: React.FunctionComponent = () => {
  const anchorRef = useRef(null);
  const btnRef = useRef(null);
  const content = 'A very lengthy anchor text content to trigger truncation';
  return (
    <>
      <div>With default width-observing truncation:</div>
      <div className="truncate-example-resize">
        <a ref={anchorRef} href="#">
          <Truncate tooltipProps={{ triggerRef: anchorRef }} content={content} />
        </a>
        <Button variant="control" ref={btnRef}>
          <Truncate tooltipProps={{ triggerRef: btnRef }} content={content} />
        </Button>
        <Truncate position="start" href="#" content={content} />
        <Truncate position="middle" href="#" content={content} />
      </div>
      <br />
      <div>With max characters truncation:</div>
      <Truncate maxCharsDisplayed={15} href="#" content={content} />
      <br />
      <Truncate maxCharsDisplayed={15} position="start" href="#" content={content} />
      <br />
      <Truncate maxCharsDisplayed={15} position="middle" href="#" content={content} />
    </>
  );
};
