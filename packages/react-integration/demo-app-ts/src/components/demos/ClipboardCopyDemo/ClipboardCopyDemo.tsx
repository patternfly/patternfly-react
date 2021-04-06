import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

export class ClipboardCopyDemo extends React.Component {
  static displayName = 'ClipboardCopyDemo';
  render() {
    return (
      <React.Fragment>
        <ClipboardCopy variant={ClipboardCopyVariant.expansion}>
          Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
          expansion.
        </ClipboardCopy>
        <br />
        <br />
        <div style={{ backgroundColor: 'white', padding: '10px' }}>
          This copy:
          <ClipboardCopy id="inline-copy" variant={ClipboardCopyVariant.inline} isBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, libero nec dapibus ultricies, urna
            purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.
          </ClipboardCopy>
          is inline in a sentence.
        </div>
      </React.Fragment>
    );
  }
}
