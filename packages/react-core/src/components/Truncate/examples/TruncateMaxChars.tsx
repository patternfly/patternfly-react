import { Truncate, TruncatePosition } from '@patternfly/react-core';

export const TruncateMaxChars: React.FunctionComponent = () => (
  <>
    <div>Truncated at end position:</div>
    <Truncate
      maxCharsDisplayed={15}
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    />
    <br />
    <br />
    <div>Truncated at middle position:</div>
    <Truncate
      maxCharsDisplayed={15}
      position={TruncatePosition.middle}
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    />
    <br />
    <br />
    <div>Truncated at start position:</div>
    <Truncate
      maxCharsDisplayed={15}
      position={TruncatePosition.start}
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    />
  </>
);
