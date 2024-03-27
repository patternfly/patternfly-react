import { Component, Fragment } from 'react';
import { ClipboardCopy, ClipboardCopyVariant, ClipboardCopyAction, Button } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

// eslint-disable-next-line patternfly-react/no-anonymous-functions
export class ClipboardCopyDemo extends Component {
  static displayName = 'ClipboardCopyDemo';
  render() {
    return (
      <Fragment>
        <ClipboardCopy variant={ClipboardCopyVariant.expansion}>
          Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
          expansion.
        </ClipboardCopy>
        <br />
        <br />
        <div style={{ backgroundColor: 'white', padding: '10px' }}>
          This copy:
          <ClipboardCopy
            id="inline-copy"
            variant={ClipboardCopyVariant.inlineCompact}
            isBlock
            additionalActions={
              <ClipboardCopyAction>
                <Button variant="plain" aria-label="Run in web terminal">
                  <PlayIcon aria-hidden />
                </Button>
              </ClipboardCopyAction>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, libero nec dapibus ultricies, urna
            purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.
          </ClipboardCopy>
          is inline in a sentence.
        </div>
        <br />
        <br />
        <ClipboardCopy
          onCopy={() => {}}
          id="tooltip-test"
          hoverTip="Copy button not clicked"
          clickTip="Copy button clicked"
        >
          Some random text.
        </ClipboardCopy>
        <br />
        <br />
        <ClipboardCopy
          exitDelay={0}
          entryDelay={0}
          onCopy={() => {}}
          id="onTooltipHidden-test"
          hoverTip="onTooltipHidden not clicked"
          clickTip="onTooltipHidden clicked"
        >
          Some random text.
        </ClipboardCopy>
      </Fragment>
    );
  }
}
